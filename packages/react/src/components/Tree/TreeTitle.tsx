import * as _ from 'lodash'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import {
  UIComponent,
  childrenExist,
  createShorthandFactory,
  commonPropTypes,
  UIComponentProps,
  ChildrenComponentProps,
  ContentComponentProps,
  rtlTextContainer,
  applyAccessibilityKeyHandlers,
} from '../../lib'
import { treeTitleBehavior } from '../../lib/accessibility'
import { Accessibility } from '../../lib/accessibility/types'
import { ComponentEventHandler, WithAsProp, withSafeTypeForAs } from '../../types'

export interface TreeTitleProps
  extends UIComponentProps,
    ChildrenComponentProps,
    ContentComponentProps {
  /** Accessibility behavior if overridden by the user. */
  accessibility?: Accessibility

  /** The index of the item among its siblings. */
  index?: number

  /** Level of the tree/subtree that contains this item. */
  level?: number

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: ComponentEventHandler<TreeTitleProps>

  /** Whether or not the subtree of the item is in the open state. */
  open?: boolean

  /** Array with the ids of the tree item's siblings, if any. */
  siblingsLength?: number
}

class TreeTitle extends UIComponent<WithAsProp<TreeTitleProps>> {
  static create: Function

  static className = 'ui-tree__title'

  static displayName = 'TreeTitle'

  static propTypes = {
    ...commonPropTypes.createCommon(),
    index: PropTypes.number,
    level: PropTypes.number,
    onClick: PropTypes.func,
    open: PropTypes.bool,
    siblingsLength: PropTypes.number,
  }

  static defaultProps = {
    as: 'a',
    accessibility: treeTitleBehavior,
  }

  actionHandlers = {
    performClick: e => {
      e.preventDefault()
      this.handleClick(e)
    },
  }

  handleClick = e => {
    _.invoke(this.props, 'onClick', e, this.props)
  }

  renderComponent({ ElementType, classes, accessibility, unhandledProps, styles, variables }) {
    const { children, content } = this.props

    return (
      <ElementType
        className={classes.root}
        onClick={this.handleClick}
        {...accessibility.attributes.root}
        {...rtlTextContainer.getAttributes({ forElements: [children, content] })}
        {...unhandledProps}
        {...applyAccessibilityKeyHandlers(accessibility.keyHandlers.root, unhandledProps)}
      >
        {childrenExist(children) ? children : content}
      </ElementType>
    )
  }
}

TreeTitle.create = createShorthandFactory({
  Component: TreeTitle,
  mappedProp: 'content',
})

/**
 * A TreeTitle renders a title of TreeItem.
 */
export default withSafeTypeForAs<typeof TreeTitle, TreeTitleProps, 'a'>(TreeTitle)