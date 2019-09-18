import * as _ from 'lodash'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import * as customPropTypes from '@stardust-ui/react-proptypes'

import {
  createShorthandFactory,
  UIComponentProps,
  applyAccessibilityKeyHandlers,
  commonPropTypes,
  AutoControlledComponent,
  ShorthandFactory,
} from '../../lib'
import { embedBehavior } from '../../lib/accessibility'
import { Accessibility } from '../../lib/accessibility/types'
import Icon, { IconProps } from '../Icon/Icon'
import Image from '../Image/Image'
import Video, { VideoProps } from '../Video/Video'
import Box, { BoxProps } from '../Box/Box'
import { ComponentEventHandler, WithAsProp, ShorthandValue, withSafeTypeForAs } from '../../types'

export interface EmbedSlotClassNames {
  control: string
}

export interface EmbedProps extends UIComponentProps {
  /** Accessibility behavior if overridden by the user. */
  accessibility?: Accessibility

  /** Whether the embedded object should be active. */
  active?: boolean

  /** Whether the embedded object should start active. */
  defaultActive?: boolean

  /** Shorthand for an control. */
  control?: ShorthandValue<IconProps>

  /** Shorthand for an embedded iframe. */
  iframe?: ShorthandValue<BoxProps>

  /**
   * Event for request to change 'active' value.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onActiveChanged?: ComponentEventHandler<EmbedProps>

  /**
   * Called when is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onClick?: ComponentEventHandler<EmbedProps>

  /** Image source URL for when video isn't playing. */
  placeholder?: string

  /** Shorthand for an embedded video. */
  video?: ShorthandValue<VideoProps>
}

export interface EmbedState {
  active: boolean
  iframeLoaded: boolean
}

class Embed extends AutoControlledComponent<WithAsProp<EmbedProps>, EmbedState> {
  static create: ShorthandFactory<EmbedProps>

  static className = 'ui-embed'

  static displayName = 'Embed'

  static propTypes = {
    ...commonPropTypes.createCommon({
      children: false,
      content: false,
    }),
    active: PropTypes.bool,
    defaultActive: PropTypes.bool,
    control: customPropTypes.itemShorthand,
    iframe: customPropTypes.itemShorthand,
    onActiveChanged: PropTypes.func,
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    video: customPropTypes.itemShorthand,
  }

  static defaultProps = {
    as: 'span',
    accessibility: embedBehavior as Accessibility,
    control: {},
  }

  static autoControlledProps = ['active']

  static slotClassNames: EmbedSlotClassNames = {
    control: `${Embed.className}__control`,
  }

  actionHandlers = {
    performClick: event => this.handleClick(event),
  }

  getInitialAutoControlledState(): EmbedState {
    return { active: false, iframeLoaded: false }
  }

  handleClick = e => {
    e.stopPropagation()
    e.preventDefault()

    const iframeNil = _.isNil(this.props.iframe)

    if (iframeNil || (!iframeNil && !this.state.active)) {
      this.setState({ active: !this.state.active })
      _.invoke(this.props, 'onActiveChanged', e, { ...this.props, active: !this.state.active })
    }

    _.invoke(this.props, 'onClick', e, { ...this.props, active: !this.state.active })
  }

  renderComponent({ ElementType, classes, accessibility, unhandledProps, styles, variables }) {
    const { control, iframe, placeholder, video } = this.props
    const { active, iframeLoaded } = this.state
    const controlVisible = !_.isNil(video) || !active
    const placeholderImage = placeholder ? (
      <Image
        src={placeholder}
        styles={styles.image}
        variables={{ width: variables.width, height: variables.height }}
      />
    ) : null

    return (
      <ElementType
        className={classes.root}
        onClick={this.handleClick}
        {...accessibility.attributes.root}
        {...unhandledProps}
        {...applyAccessibilityKeyHandlers(accessibility.keyHandlers.root, unhandledProps)}
      >
        {iframe && active && !iframeLoaded && placeholderImage}
        {active ? (
          <>
            {Video.create(video, {
              defaultProps: {
                autoPlay: true,
                controls: false,
                loop: true,
                muted: true,
                poster: placeholder,
                styles: styles.video,
                variables: {
                  width: variables.width,
                  height: variables.height,
                },
              },
            })}
            {Box.create(iframe, {
              defaultProps: {
                as: 'iframe',
                styles: styles.iframe,
                style: { visibility: iframeLoaded ? 'visible' : 'hidden' },
              },
              overrideProps: {
                onLoad: () => {
                  this.setState({ iframeLoaded: true })
                },
              },
            })}
          </>
        ) : (
          placeholderImage
        )}

        {controlVisible &&
          Icon.create(control, {
            defaultProps: {
              className: Embed.slotClassNames.control,
              circular: true,
              name: active ? 'stardust-pause' : 'stardust-play',
              size: 'largest',
              styles: styles.control,
            },
          })}
      </ElementType>
    )
  }
}

Embed.create = createShorthandFactory({ Component: Embed })

/**
 * An Embed displays content from external websites, like a post from external social network.
 *
 * @accessibility
 * A `placeholder` slot represents an [`Image`](/components/image/definition) component, please follow recommendations from its
 * accessibility section.
 */
export default withSafeTypeForAs<typeof Embed, EmbedProps, 'span'>(Embed)
