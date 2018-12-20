import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as PropTypes from 'prop-types'
import * as _ from 'lodash'
import { Popper, PopperChildrenProps } from 'react-popper'

import {
  childrenExist,
  AutoControlledComponent,
  EventStack,
  RenderResultConfig,
  isBrowser,
  ChildrenComponentProps,
  ContentComponentProps,
  StyledComponentProps,
  commonPropTypes,
} from '../../lib'
import { ComponentEventHandler, ReactProps, ShorthandValue } from '../../../types/utils'

import Ref from '../Ref/Ref'
import { getPopupPlacement, applyRtlToOffset, Alignment, Position } from './positioningHelper'

import PopupContent from './PopupContent'

import { popupBehavior } from '../../lib/accessibility'
import { FocusTrapZone, FocusTrapZoneProps } from '../../lib/accessibility/FocusZone'

import {
  Accessibility,
  AccessibilityActionHandlers,
  AccessibilityBehavior,
} from '../../lib/accessibility/types'

const POSITIONS: Position[] = ['above', 'below', 'before', 'after']
const ALIGNMENTS: Alignment[] = ['top', 'bottom', 'start', 'end', 'center']

export interface PopupProps
  extends StyledComponentProps<PopupProps>,
    ChildrenComponentProps,
    ContentComponentProps<ShorthandValue> {
  /**
   * Accessibility behavior if overridden by the user.
   * @default popupBehavior
   * @available popupFocusTrapBehavior, dialogBehavior
   * */
  accessibility?: Accessibility

  /** Alignment for the popup. */
  align?: Alignment

  /** Additional CSS class name(s) to apply.  */
  className?: string

  /** Initial value for 'open'. */
  defaultOpen?: boolean

  /** Delay in ms for the mouse leave event, before the popup will be closed. */
  mouseLeaveDelay?: number

  /** Offset value to apply to rendered popup. Accepts the following units:
   * - px or unit-less, interpreted as pixels
   * - %, percentage relative to the length of the trigger element
   * - %p, percentage relative to the length of the popup element
   * - vw, CSS viewport width unit
   * - vh, CSS viewport height unit
   */
  offset?: string

  /** Events triggering the popup. */
  on?: 'click' | 'hover' | 'focus' | ['focus' | 'click'] | ['focus' | 'hover']

  /** Defines whether popup is displayed. */
  open?: boolean

  /**
   * Event for request to change 'open' value.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onOpenChange?: ComponentEventHandler<PopupProps>

  /**
   * Position for the popup. Position has higher priority than align. If position is vertical ('above' | 'below')
   * and align is also vertical ('top' | 'bottom') or if both position and align are horizontal ('before' | 'after'
   * and 'start' | 'end' respectively), then provided value for 'align' will be ignored and 'center' will be used instead.
   */
  position?: Position

  /**
   * DOM element that should be used as popup's target - instead of 'trigger' element that is used by default.
   */
  target?: HTMLElement

  /** Initial value for 'target'. */
  defaultTarget?: HTMLElement

  /** Element to be rendered in-place where the popup is defined. */
  trigger?: JSX.Element
}

export interface PopupState {
  open: boolean
  target: HTMLElement
}

/**
 * A Popup displays additional information on top of a page.
 * @accessibility This is example usage of the accessibility tag.
 * This should be replaced with the actual description after the PR is merged
 */
export default class Popup extends AutoControlledComponent<ReactProps<PopupProps>, PopupState> {
  public static displayName = 'Popup'

  public static className = 'ui-popup'

  public static Content = PopupContent

  public static propTypes = {
    ...commonPropTypes.createCommon({
      animated: false,
      as: false,
      content: 'shorthand',
    }),
    accessibility: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    align: PropTypes.oneOf(ALIGNMENTS),
    defaultOpen: PropTypes.bool,
    defaultTarget: PropTypes.any,
    mouseLeaveDelay: PropTypes.number,
    on: PropTypes.oneOfType([
      PropTypes.oneOf(['hover', 'click', 'focus']),
      PropTypes.arrayOf(PropTypes.oneOf(['click', 'focus'])),
      PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus'])),
    ]),
    open: PropTypes.bool,
    onOpenChange: PropTypes.func,
    position: PropTypes.oneOf(POSITIONS),
    target: PropTypes.any,
    trigger: PropTypes.any,
  }

  public static defaultProps: PopupProps = {
    accessibility: popupBehavior,
    align: 'start',
    position: 'above',
    on: 'click',
    mouseLeaveDelay: 500,
  }

  public static autoControlledProps = ['open', 'target']

  private static isBrowserContext = isBrowser()

  private isPopupClosing = false

  setPopupOpen(newOpen, e) {
    if (!newOpen) {
      this.schedulePopupClose(e)
    } else {
      this.isPopupClosing = false
      this.trySetOpen(true, e)
    }
  }

  schedulePopupClose = e => {
    const { mouseLeaveDelay } = this.props
    this.isPopupClosing = true
    setTimeout(() => {
      if (this.isPopupClosing) {
        this.trySetOpen(false, e)
      }

      this.isPopupClosing = false
    }, mouseLeaveDelay)
  }
  private outsideClickSubscription = EventStack.noSubscription

  private triggerDomElement = null
  private popupDomElement = null

  protected actionHandlers: AccessibilityActionHandlers = {
    toggle: e => {
      this.trySetOpen(!this.state.open, e, true)
    },
    closeAndFocusTrigger: e => {
      this.closeAndFocusTrigger(e, true)
      e.stopPropagation()
    },
    close: e => {
      this.closeAndFocusTrigger(e, false)
      e.stopPropagation()
    },
  }

  private closeAndFocusTrigger = (e, focusTrigger) => {
    if (this.state.open) {
      this.trySetOpen(false, e, true)
      focusTrigger && _.invoke(this.triggerDomElement, 'focus')
    }
  }

  private updateOutsideClickSubscription() {
    this.outsideClickSubscription.unsubscribe()

    if (this.state.open) {
      setTimeout(() => {
        this.outsideClickSubscription = EventStack.subscribe(
          'click',
          e => {
            const isOutsidePopupElement =
              this.popupDomElement && !this.popupDomElement.contains(e.target)
            const isOutsideTriggerElement =
              this.triggerDomElement && !this.triggerDomElement.contains(e.target)

            if (isOutsidePopupElement && isOutsideTriggerElement) {
              this.state.open && this.trySetOpen(false, e, true)
            }
          },
          {
            useCapture: true,
          },
        )
      })
    }
  }

  public componentDidMount() {
    this.updateOutsideClickSubscription()

    if (!this.state.open) {
      this.popupDomElement = null
    }
  }

  public componentDidUpdate() {
    this.updateOutsideClickSubscription()

    if (!this.state.open) {
      this.popupDomElement = null
    }
  }

  public componentWillUnmount() {
    this.outsideClickSubscription.unsubscribe()
  }

  public renderComponent({
    classes,
    rtl,
    accessibility,
  }: RenderResultConfig<PopupProps>): React.ReactNode {
    const popupContent = this.renderPopupContent(classes.popup, rtl, accessibility)

    return (
      <>
        {this.renderTrigger(accessibility)}

        {this.state.open &&
          Popup.isBrowserContext &&
          popupContent &&
          ReactDOM.createPortal(popupContent, document.body)}
      </>
    )
  }

  getTriggerProps(triggerElement) {
    const triggerProps: any = {}

    const { on } = this.props
    const normalizedOn = _.isArray(on) ? on : [on]

    if (_.includes(normalizedOn, 'click')) {
      triggerProps.onClick = (e, ...rest) => {
        this.trySetOpen(!this.state.open, e)
        _.invoke(triggerElement, 'props.onClick', e, ...rest)
      }
    }
    if (_.includes(normalizedOn, 'focus') || _.includes(normalizedOn, 'hover')) {
      triggerProps.onFocus = (e, ...rest) => {
        this.trySetOpen(true, e)
        _.invoke(triggerElement, 'props.onFocus', e, ...rest)
      }
      triggerProps.onBlur = (e, ...rest) => {
        if (
          !e.currentTarget.contains(e.relatedTarget) &&
          !this.popupDomElement.contains(e.relatedTarget)
        ) {
          this.trySetOpen(false, e)
        }
        _.invoke(triggerElement, 'props.onBlur', e, ...rest)
      }
    }
    if (_.includes(normalizedOn, 'hover')) {
      triggerProps.onMouseEnter = (e, ...rest) => {
        this.setPopupOpen(true, e)
        _.invoke(triggerElement, 'props.onMouseEnter', e, ...rest)
      }
      triggerProps.onMouseLeave = (e, ...rest) => {
        this.setPopupOpen(false, e)
        _.invoke(triggerElement, 'props.onMouseLeave', e, ...rest)
      }
    }

    return triggerProps
  }

  handleContentOverrides = (predefinedProps?) => {
    const contentProps: any = {}

    const { on } = this.props
    const normalizedOn = _.isArray(on) ? on : [on]

    if (_.includes(normalizedOn, 'hover')) {
      contentProps.onMouseEnter = (e, contentProps) => {
        this.setPopupOpen(true, e)
        predefinedProps && _.invoke(predefinedProps, 'onMouseEnter', e, contentProps)
      }
      contentProps.onMouseLeave = (e, contentProps) => {
        this.setPopupOpen(false, e)
        predefinedProps && _.invoke(predefinedProps, 'onMouseLeave', e, contentProps)
      }
    }
    if (_.includes(normalizedOn, 'focus') || _.includes(normalizedOn, 'hover')) {
      contentProps.onFocus = (e, contentProps) => {
        !this.state.open && this.trySetOpen(true, e)
        predefinedProps && _.invoke(predefinedProps, 'onFocus', e, contentProps)
      }
      contentProps.onBlur = (e, contentProps) => {
        if (
          !e.currentTarget.contains(e.relatedTarget) &&
          !this.popupDomElement.contains(e.relatedTarget)
        ) {
          this.trySetOpen(false, e)
        }
        predefinedProps && _.invoke(predefinedProps, 'onBlur', e, contentProps)
      }
    }

    return contentProps
  }

  private renderTrigger(accessibility) {
    const { children, trigger } = this.props
    const triggerElement = childrenExist(children) ? children : (trigger as any)
    const triggerProps = this.getTriggerProps(triggerElement)
    return (
      triggerElement && (
        <Ref
          innerRef={domNode => {
            this.trySetState({ target: domNode })
            this.triggerDomElement = domNode
          }}
        >
          {React.cloneElement(triggerElement, {
            ...triggerProps,
            ...accessibility.attributes.trigger,
            ...accessibility.keyHandlers.trigger,
          })}
        </Ref>
      )
    )
  }

  private renderPopupContent(
    popupPositionClasses: string,
    rtl: boolean,
    accessibility: AccessibilityBehavior,
  ): JSX.Element {
    const { align, position, offset } = this.props
    const { target } = this.state

    const placement = getPopupPlacement({ align, position, rtl })

    const popperModifiers = {
      // https://popper.js.org/popper-documentation.html#modifiers..offset
      ...(offset && {
        offset: { offset: rtl ? applyRtlToOffset(offset, position) : offset },
        keepTogether: { enabled: false },
      }),
    }

    return (
      target && (
        <Popper
          placement={placement}
          referenceElement={target}
          children={this.renderPopperChildren.bind(this, popupPositionClasses, rtl, accessibility)}
          modifiers={popperModifiers}
        />
      )
    )
  }

  private renderPopperChildren = (
    popupPositionClasses: string,
    rtl: boolean,
    accessibility: AccessibilityBehavior,
    { ref, style: popupPlacementStyles }: PopperChildrenProps,
  ) => {
    const { content } = this.props

    // TODO: add here the handlers (onFocus, onBlur etc..)
    const popupWrapperAttributes = {
      ...(rtl && { dir: 'rtl' }),
      ...accessibility.attributes.popup,
      ...accessibility.keyHandlers.popup,

      className: popupPositionClasses,
      style: popupPlacementStyles,
      ...this.handleContentOverrides(),
    }

    const focusTrapProps = {
      ...(typeof accessibility.focusTrap === 'boolean' ? {} : accessibility.focusTrap),
      ...popupWrapperAttributes,
    } as FocusTrapZoneProps

    /**
     * if there is no focus trap wrapper, we should apply
     * HTML attributes and positioning to popup content directly
     */
    const popupContentAttributes = accessibility.focusTrap ? {} : popupWrapperAttributes

    const popupContent = React.isValidElement(content)
      ? React.cloneElement(content, popupContentAttributes)
      : Popup.Content.create(content, {
          defaultProps: popupContentAttributes,
          overrideProps: this.handleContentOverrides,
        })

    return (
      <Ref
        innerRef={domElement => {
          ref(domElement)
          this.popupDomElement = domElement
        }}
      >
        {accessibility.focusTrap ? (
          <FocusTrapZone {...focusTrapProps}>{popupContent}</FocusTrapZone>
        ) : (
          popupContent
        )}
      </Ref>
    )
  }

  private trySetOpen(newValue: boolean, eventArgs: any, forceChangeEvent: boolean = false) {
    if (this.trySetState({ open: newValue }) || forceChangeEvent) {
      _.invoke(this.props, 'onOpenChange', eventArgs, { ...this.props, ...{ open: newValue } })
    }
  }
}
