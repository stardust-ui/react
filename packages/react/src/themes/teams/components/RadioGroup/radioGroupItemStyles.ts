import { ComponentSlotStylesInput, ICSSInJSStyle } from '../../../types'
import {
  RadioGroupItemProps,
  RadioGroupItemState,
} from '../../../../components/RadioGroup/RadioGroupItem'
import { RadioGroupItemVariables } from './radioGroupItemVariables'
import { pxToRem } from '../../../../lib'
import Icon from '../../../../components/Icon/Icon'
import getBorderFocusStyles from '../../getBorderFocusStyles'

const restHoverFocusTextColor = textColor => ({
  color: textColor,

  ':hover': {
    color: textColor,
  },

  ':focus': {
    color: textColor,
  },
})

const radioStyles: ComponentSlotStylesInput<
  RadioGroupItemProps & RadioGroupItemState,
  RadioGroupItemVariables
> = {
  root: ({ props: p, variables: v, theme: { siteVariables } }): ICSSInJSStyle => ({
    position: 'relative',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: `${pxToRem(1)}`,
    borderColor: 'transparent',
    borderRadius: `${pxToRem(2)}`,
    color: v.textColorDefault,
    cursor: 'pointer',
    display: p.vertical ? 'flex' : 'inline-flex',
    fontSize: v.textFontSize,
    padding: v.padding,

    ':hover': {
      color: v.textColorDefaultHoverFocus,

      [`& .${Icon.className}`]: {
        color: v.iconBorderColorDefaultHover,
      },
    },

    ':focus': {
      color: v.textColorDefaultHoverFocus,
    },

    ...(p.checked && {
      ...restHoverFocusTextColor(v.textColorChecked),
    }),

    ...(p.disabled && {
      ...restHoverFocusTextColor(v.colorDisabled),
    }),

    ...getBorderFocusStyles({ siteVariables, isFromKeyboard: p.isFromKeyboard }),
  }),

  icon: ({ props: p, variables: v }): ICSSInJSStyle => ({
    // overrides from icon styles
    backgroundColor: 'transparent',
    boxShadow: 'none',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderWidth: `${pxToRem(1)}`,
    borderColor: 'currentColor',
    margin: `0 ${pxToRem(12)} 0 0`,
    height: `${pxToRem(12)}`,
    width: `${pxToRem(12)}`,

    ...(p.checked && {
      backgroundColor: v.iconBackgroundColorChecked,
      borderColor: v.iconBorderColorChecked,
    }),

    ...(p.disabled && {
      borderColor: v.colorDisabled,
    }),

    ...(p.checked &&
      p.disabled && {
        backgroundColor: v.colorDisabled,
      }),
  }),
}

export default radioStyles
