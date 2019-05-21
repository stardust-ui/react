import * as React from 'react'
import {
  ChildrenComponentProps,
  ContentComponentProps,
  createShorthandFactory,
  UIComponentProps,
  UIComponent,
  commonPropTypes,
} from '../../lib'
import { Accessibility } from '../../lib/accessibility/types'
import { WithAsProp, withSafeTypeForAs } from '../../types'
import { defaultBehavior } from '../../lib/accessibility'

export interface ToolbarDividerProps
  extends UIComponentProps,
    ChildrenComponentProps,
    ContentComponentProps {
  /**
   * Accessibility behavior if overridden by the user.
   * @default menuDividerBehavior
   */
  accessibility?: Accessibility
}

class ToolbarDivider extends UIComponent<WithAsProp<ToolbarDividerProps>> {
  static displayName = 'ToolbarDivider'

  static create: Function

  static className = 'ui-toolbar__divider'

  static propTypes = {
    ...commonPropTypes.createCommon(),
  }

  static defaultProps = {
    accessibility: defaultBehavior as Accessibility,
  }

  renderComponent({ ElementType, classes, unhandledProps, accessibility }) {
    return (
      <ElementType {...accessibility.attributes.root} {...unhandledProps} className={classes.root}>
        |
      </ElementType>
    )
  }
}

ToolbarDivider.create = createShorthandFactory({ Component: ToolbarDivider, mappedProp: 'content' })

/**
 * Toolbar divider.
 * TODO: add meaningful description
 */
export default withSafeTypeForAs<typeof ToolbarDivider, ToolbarDividerProps>(ToolbarDivider)
