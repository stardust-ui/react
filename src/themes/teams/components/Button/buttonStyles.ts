import { pxToRem } from '../../../../lib'
import { IComponentPartStylesInput, ICSSInJSStyle } from '../../../../../types/theme'
import { truncateStyle } from '../../../../styles/customCSS'

const buttonStyles: IComponentPartStylesInput = {
  root: ({ props, variables }: { props: any; variables: any }): ICSSInJSStyle => {
    const { circular, disabled, fluid, type, text, iconOnly, isFromKeyboard } = props
    const primary = type === 'primary'
    const secondary = type === 'secondary'

    const {
      height,
      minWidth,
      maxWidth,
      borderRadius,
      color,
      backgroundColor,
      backgroundColorHover,
      circularRadius,
      paddingLeftRightValue,
      typeDisabledButtonColor,
      typeDisabledButtonBackgroundColor,
      typePrimaryColor,
      typePrimaryBackgroundColor,
      typePrimaryBackgroundColorActive,
      typePrimaryBackgroundColorHover,
      typePrimaryBackgroundColorFocus,
      typePrimaryBorderColor,
      typePrimaryBorderColorFocus,
      typePrimaryBorderColorInsetFocus,
      typeSecondaryColor,
      typeSecondaryBackgroundColor,
      typeSecondaryBackgroundColorActive,
      typeSecondaryBackgroundColorHover,
      typeSecondaryBackgroundColorFocus,
      typeSecondaryBorderColor,
      typeSecondaryBorderColorActive,
      typeSecondaryBorderColorHover,
      typeSecondaryBorderColorFocus,
      typeSecondaryBorderColorInsetFocus,
      typeTextColorHover,
      typeTextPrimaryColor,
      typeTextPrimaryColorHover,
      typeTextSecondaryColor,
      typeTextSecondaryColorHover,
    } = variables

    return {
      cursor: 'pointer',
      outline: 0,
      height,
      minWidth,
      maxWidth,
      color,
      backgroundColor,
      borderRadius,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      padding: `0 ${pxToRem(paddingLeftRightValue)}`,
      margin: `0 ${pxToRem(8)} 0 0`,
      verticalAlign: 'middle',

      ':focus': {
        ...(isFromKeyboard &&
          {
            // focus styles should be added like this, since they should be applied only on keyboard.
          }),
      },

      ...(!text && {
        borderWidth: `${secondary ? (circular ? 1 : 2) : 0}px`,
        ':hover': {
          backgroundColor: backgroundColorHover,
        },
      }),

      ...(text && {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        ':hover': {
          color: typeTextColorHover,
        },
      }),

      ...(primary &&
        !text && {
          color: typePrimaryColor,
          backgroundColor: typePrimaryBackgroundColor,
          border: `${pxToRem(1)} solid ${typePrimaryBorderColor}`,
          ':active': {
            backgroundColor: typePrimaryBackgroundColorActive,
          },
          ':hover': {
            backgroundColor: typePrimaryBackgroundColorHover,
          },

          ':focus': {
            backgroundColor: typePrimaryBackgroundColorFocus,
            borderColor: typePrimaryBorderColorFocus,
            '::before': {
              content: '""',
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              border: `${pxToRem(1)} solid ${typePrimaryBorderColorInsetFocus}`,
              borderRadius: `${pxToRem(2)}`,
            },
          },
        }),

      ...(primary &&
        text && {
          color: typeTextPrimaryColor,
          ':hover': {
            color: typeTextPrimaryColorHover,
          },
        }),

      ...(secondary &&
        !text && {
          color: typeSecondaryColor,
          backgroundColor: typeSecondaryBackgroundColor,
          borderColor: typeSecondaryBorderColor,
          border: `${pxToRem(1)} solid ${typeSecondaryBorderColor}`,
          ':active': {
            backgroundColor: typeSecondaryBackgroundColorActive,
            borderColor: typeSecondaryBorderColorActive,
          },
          ':hover': {
            backgroundColor: typeSecondaryBackgroundColorHover,
            borderColor: typeSecondaryBorderColorHover,
          },
          ':focus': {
            backgroundColor: typeSecondaryBackgroundColorFocus,
            borderColor: typeSecondaryBorderColorFocus,
            '::before': {
              content: '""',
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              border: `${pxToRem(1)} solid ${typeSecondaryBorderColorInsetFocus}`,
              borderRadius: `${pxToRem(2)}`,
            },
          },
        }),

      ...(secondary &&
        text && {
          color: typeTextSecondaryColor,
          ':hover': {
            color: typeTextSecondaryColorHover,
          },
        }),

      ...(circular && {
        minWidth: height,
        padding: 0,
        borderRadius: circularRadius,
      }),

      ...(fluid && {
        width: '100%',
        maxWidth: '100%',
      }),

      ...(disabled && {
        cursor: 'pointer',
        color: typeDisabledButtonColor,
        backgroundColor: typeDisabledButtonBackgroundColor,
        borderColor: typeDisabledButtonBackgroundColor,
        ':hover': {
          backgroundColor: typeDisabledButtonBackgroundColor,
          borderColor: typeDisabledButtonBackgroundColor,
        },
      }),

      ...(iconOnly && {
        minWidth: height,
        padding: 0,
      }),
    }
  },

  content: ({ props }) => ({
    overflow: 'hidden',
    ...(typeof props.content === 'string' && truncateStyle),
  }),
}

export default buttonStyles
