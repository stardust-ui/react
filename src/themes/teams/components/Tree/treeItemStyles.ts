import { ICSSInJSStyle } from '../../../types'
import { pxToRem } from '../../utils'

const treeItemStyles = {
  root: (): ICSSInJSStyle => ({
    listStyleType: 'none',
    padding: `0 0 0 ${pxToRem(1)}`,
  }),
}

export default treeItemStyles
