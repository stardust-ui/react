import { pxToRem } from '../../../../lib'

export interface DropdownVariables {
  backgroundColor: string
  backgroundColorHover: string
  borderBottomRadius: string
  borderColor: string
  borderColorFocus: string
  borderTopRadius: string
  borderWidth: string
  searchBorderBottomWidth: string
  color: string
  comboboxPaddingButton: string
  comboboxFlexBasis: string
  listBackgroundColor: string
  listBorderColor: string
  listBorderWidth: string
  listPadding: string
  listBoxShadow: string
  listMaxHeight: string
  listItemBackgroundColor: string
  listItemColorHover: string
  listItemBackgroundColorHover: string
  listItemBackgroundColorActive: string
  listItemColorActive: string
  listItemSelectedFontWeight: number
  listItemSelectedColor: string
  selectedItemColor: string
  selectedItemBackgroundColor: string
  selectedItemColorFocus: string
  selectedItemBackgroundColorFocus: string
  selectedItemsMaxHeight: string
  toggleIndicatorSize: string
  triggerButtonColorHover: string
  width: string
}

const [_2px_asRem, _3px_asRem, _12px_asRem] = [2, 3, 12].map(v => pxToRem(v))

export default (siteVars): DropdownVariables => ({
  backgroundColor: siteVars.colors.grey[100],
  backgroundColorHover: siteVars.colors.grey[150],
  borderBottomRadius: _2px_asRem,
  borderColor: 'transparent',
  borderColorFocus: siteVars.colors.brand[600],
  borderTopRadius: _3px_asRem,
  borderWidth: '0px',
  searchBorderBottomWidth: pxToRem(2),
  color: siteVars.bodyColor,
  selectedItemColor: siteVars.bodyColor,
  comboboxPaddingButton: `0 ${_12px_asRem}`,
  comboboxFlexBasis: pxToRem(50),
  listBackgroundColor: siteVars.colors.white,
  listBorderColor: 'transparent',
  listBorderWidth: '0px',
  listPadding: `${pxToRem(8)} 0`,
  listBoxShadow: siteVars.shadowLevel3,
  listMaxHeight: pxToRem(296),
  listItemBackgroundColor: siteVars.colors.white,
  listItemColorHover: siteVars.colors.grey[750],
  listItemBackgroundColorHover: siteVars.colors.grey[100],
  listItemBackgroundColorActive: siteVars.colors.grey[100],
  listItemColorActive: siteVars.colors.grey[750],
  listItemSelectedFontWeight: siteVars.fontWeightSemibold,
  listItemSelectedColor: siteVars.colors.grey[750],
  selectedItemBackgroundColor: undefined,
  selectedItemColorFocus: siteVars.bodyColor,
  selectedItemBackgroundColorFocus: siteVars.colors.brand[200],
  selectedItemsMaxHeight: pxToRem(82),
  toggleIndicatorSize: pxToRem(32),
  triggerButtonColorHover: siteVars.bodyColor,
  width: pxToRem(356),
})
