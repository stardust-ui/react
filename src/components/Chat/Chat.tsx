import * as _ from 'lodash'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import { childrenExist, customPropTypes, UIComponent } from '../../lib'
import ChatItem from './ChatItem'
import { ComponentPartStyle, ComponentVariablesInput } from '../../../types/theme'
import { Extendable, ItemShorthand, ReactChildren } from '../../../types/utils'
import ChatMessage from './ChatMessage'
import { Accessibility, AccessibilityActionHandlers } from '../../lib/accessibility/interfaces'
import ChatBehavior from '../../lib/accessibility/Behaviors/Chat/ChatBehavior'

export interface IChatProps {
  accessibility?: Accessibility
  as?: any
  className?: string
  children?: ReactChildren
  items?: ItemShorthand[]
  styles?: ComponentPartStyle
  variables?: ComponentVariablesInput
}

class Chat extends UIComponent<Extendable<IChatProps>, any> {
  static className = 'ui-chat'

  static displayName = 'Chat'

  static propTypes = {
    /** Accessibility behavior if overridden by the user. */
    accessibility: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    as: customPropTypes.as,

    /** Additional CSS class name(s) to apply.  */
    className: PropTypes.string,

    children: PropTypes.node,

    /** Shorthand array of the items inside the chat. */
    items: PropTypes.arrayOf(PropTypes.any),

    /** Additional CSS styles to apply to the component instance.  */
    styles: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    /** Override for theme site variables to allow modifications of component styling via themes. */
    variables: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  static defaultProps = { accessibility: ChatBehavior as Accessibility, as: 'ul' }

  static Item = ChatItem
  static Message = ChatMessage

  actionHandlers: AccessibilityActionHandlers = {
    focus: event => this.focusZone && this.focusZone.focus(),
  }

  renderComponent({ ElementType, classes, accessibility, rest }) {
    const { children, items } = this.props

    return (
      <ElementType
        {...accessibility.attributes.root}
        {...accessibility.keyHandlers.root}
        {...rest}
        className={classes.root}
      >
        {childrenExist(children) ? children : _.map(items, item => ChatItem.create(item))}
      </ElementType>
    )
  }
}

export default Chat
