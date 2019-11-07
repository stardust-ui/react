import { pxToRem } from '../../../../lib'

export interface TeamsTableVariables {
  viewMode: 'default' | 'compact'
  color: string
  hoverColor: string
  backgroundColor: string
  backgroundHoverColor: string
  borderWidth: string
  headerBorderColor: string
  headerBorderHoverColor: string
  headerBorderFocusColor: string
  rowBorderColor: string
  rowBorderHoverColor: string
  rowBorderFocusColor: string
  cellBorderColor: string
  cellBorderHoverColor: string
  cellBorderFocusColor: string
  defaultRowHeight: string
  compactRowHeight: string
  minCellWidth: string
  cellPadding: string
  rowPadding: string
  headerFontSize: string
  bodyFontSize: string
  cellContentOverflow: 'none' | 'ellipsis'
}

export default (siteVariables): Partial<TeamsTableVariables> => {
  return {
    viewMode: 'default',
    color: siteVariables.colorScheme.default.foreground,
    hoverColor: siteVariables.colorScheme.default.foreground,
    backgroundColor: siteVariables.colorScheme.default.background,
    backgroundHoverColor: siteVariables.colorScheme.default.backgroundHover1,
    defaultRowHeight: pxToRem(48),
    compactRowHeight: pxToRem(36),
    minCellWidth: '0',
    cellPadding: pxToRem(2),
    rowPadding: '0',
    headerFontSize: pxToRem(12),
    bodyFontSize: pxToRem(13),
    cellContentOverflow: 'ellipsis',
    borderWidth: pxToRem(1),
    headerBorderColor: siteVariables.colorScheme.default.backgroundHover1,
    headerBorderHoverColor: 'transparent',
    headerBorderFocusColor: 'transparent',
    rowBorderColor: siteVariables.colorScheme.default.backgroundHover1,
    rowBorderHoverColor: siteVariables.colorScheme.default.backgroundHover1,
    rowBorderFocusColor: siteVariables.colorScheme.default.borderFocus,
    cellBorderColor: 'transparent',
    cellBorderHoverColor: 'transparent',
    cellBorderFocusColor: siteVariables.colorScheme.default.borderFocus,
  }
}
