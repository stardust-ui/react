import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Image, Label, Status } from '../../'

import { createShorthandFactory, customPropTypes, UIComponent } from '../../lib'
import { Extendable, ShorthandValue } from '../../../types/utils'
import { UIComponentProps } from '../../lib/commonPropInterfaces'
import { commonUIComponentPropTypes } from '../../lib/commonPropTypes'

export interface AvatarProps extends UIComponentProps<any, any> {
  /** Shorthand for the image. */
  image?: ShorthandValue

  /** Shorthand for the label. */
  label?: ShorthandValue

  /** The name used for displaying the initials of the avatar if the image is not provided. */
  name?: string

  /** Size multiplier. */
  size?: number

  /** Shorthand for the status of the user. */
  status?: ShorthandValue

  /** Custom method for generating the initials from the name property, shown in the avatar if there is no image provided. */
  getInitials?: (name: string) => string
}

/**
 * An avatar is a graphic representation of user.
 */
class Avatar extends UIComponent<Extendable<AvatarProps>, any> {
  static create: Function

  static className = 'ui-avatar'

  static displayName = 'Avatar'

  static propTypes = {
    ...commonUIComponentPropTypes,
    name: PropTypes.string,
    image: customPropTypes.itemShorthand,
    label: customPropTypes.itemShorthand,
    size: PropTypes.number,
    status: customPropTypes.itemShorthand,
    getInitials: PropTypes.func,
  }

  static defaultProps = {
    size: 32,
    getInitials(name: string) {
      if (!name) {
        return ''
      }

      const reducedName = name
        .replace(/\s*\(.*?\)\s*/g, ' ')
        .replace(/\s*{.*?}\s*/g, ' ')
        .replace(/\s*\[.*?]\s*/g, ' ')

      const initials = reducedName
        .split(' ')
        .filter(item => item !== '')
        .map(name => name.charAt(0))
        .reduce((accumulator, currentValue) => accumulator + currentValue)

      if (initials.length > 2) {
        return initials.charAt(0) + initials.charAt(initials.length - 1)
      }
      return initials
    },
  }

  renderComponent({ ElementType, classes, rest, styles, variables }) {
    const { name, status, image, label, getInitials } = this.props as AvatarPropsWithDefaults

    return (
      <ElementType {...rest} className={classes.root}>
        {Image.create(image, {
          defaultProps: {
            fluid: true,
            avatar: true,
            title: name,
            styles: styles.image,
          },
        })}
        {!image &&
          Label.create(label || {}, {
            defaultProps: {
              content: getInitials(name),
              circular: true,
              title: name,
              styles: styles.label,
            },
          })}
        {Status.create(status, {
          defaultProps: {
            styles: styles.status,
            variables: {
              borderColor: variables.statusBorderColor,
              borderWidth: variables.statusBorderWidth,
            },
          },
        })}
      </ElementType>
    )
  }
}

Avatar.create = createShorthandFactory(Avatar, 'name')

export default Avatar

export type AvatarPropsWithDefaults = AvatarProps & typeof Avatar.defaultProps
