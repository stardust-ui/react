import * as PropTypes from 'prop-types'
import * as React from 'react'
import * as _ from 'lodash'

import { UIComponent, childrenExist, customPropTypes } from '../../lib'
import { ComponentEventHandler, Extendable, ShorthandValue } from '../../../types/utils'
import FormField from './FormField'
import {
  UIComponentProps,
  ChildrenComponentProps,
  ContentComponentProps,
} from '../../lib/commonPropInterfaces'
import {
  commonUIComponentPropTypes,
  childrenComponentPropTypes,
  contentComponentPropsTypes,
} from '../../lib/commonPropTypes'

export interface FormProps
  extends UIComponentProps<any, any>,
    ChildrenComponentProps,
    ContentComponentProps {
  /** The HTML form action. */
  action?: string

  /** Shorthand array of props for the Form.Fields inside the Form. */
  fields?: ShorthandValue[]

  /**
   * The HTML form submit handler.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onSubmit?: ComponentEventHandler<FormProps>
}

/**
 * A Form displays a set of related user input fields in a structured way.
 * @accessibility
 * Label needs to be provided by using 'aria-label', or 'aria-labelledby' attributes on the <form> element.
 */
class Form extends UIComponent<Extendable<FormProps>, any> {
  static create: Function

  public static displayName = 'Form'

  public static className = 'ui-form'

  public static propTypes = {
    ...commonUIComponentPropTypes,
    ...childrenComponentPropTypes,
    ...contentComponentPropsTypes,
    action: PropTypes.string,
    fields: customPropTypes.collectionShorthand,
    onSubmit: PropTypes.func,
  }

  public static defaultProps = {
    as: 'form',
  }

  public static Field = FormField

  public renderComponent({ ElementType, classes, rest }): React.ReactNode {
    const { action, children } = this.props
    return (
      <ElementType className={classes.root} action={action} onSubmit={this.handleSubmit} {...rest}>
        {childrenExist(children) ? children : this.renderFields()}
      </ElementType>
    )
  }

  private handleSubmit = (e, ...args) => {
    const { action } = this.props

    // Heads up! Third party libs can pass own data as first argument, we need to check that it has preventDefault()
    // method.
    if (!action) _.invoke(e, 'preventDefault')
    _.invoke(this.props, 'onSubmit', e, this.props, ...args)
  }

  private renderFields = () => {
    const { fields } = this.props
    return _.map(fields, field => FormField.create(field))
  }
}

export default Form
