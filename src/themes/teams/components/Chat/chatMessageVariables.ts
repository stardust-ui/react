import { pxToRem } from '../../../../lib'

export interface ChatMessageVariables {
  width: string
  backgroundColor: string
  backgroundColorMine: string
  borderRadius: string
  color: string
  padding: string
  authorMargin: string
  contentFocusOutlineColor: string
  border: string
}

export default (siteVars): ChatMessageVariables => ({
  width: '100%',
  backgroundColor: siteVars.white,
  backgroundColorMine: '#E5E5F1',
  borderRadius: '0.3rem',
  color: 'rgb(64, 64, 64)',
  padding: pxToRem(16),
  authorMargin: pxToRem(10),
  contentFocusOutlineColor: siteVars.brand,
  border: 'none',
})
