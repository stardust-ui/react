import * as _ from 'lodash'
import * as PropTypes from 'prop-types'
import * as React from 'react'

import TreeItem, { TreeItemProps } from './TreeItem'
import {
  AutoControlledComponent,
  childrenExist,
  commonPropTypes,
  createShorthandFactory,
  customPropTypes,
  UIComponentProps,
  ChildrenComponentProps,
  rtlTextContainer,
} from '../../lib'
import { ShorthandValue, ShorthandRenderFunction, ReactProps } from '../../types'
import { Accessibility } from '../../lib/accessibility/types'
import { defaultBehavior } from '../../lib/accessibility'

export interface TreeProps extends UIComponentProps, ChildrenComponentProps {
  /** Index of the currently active subtree. */
  activeIndex?: number[] | number

  /**
   * Accessibility behavior if overridden by the user.
   * @default defaultBehavior
   */
  accessibility?: Accessibility

  /** Initial activeIndex value. */
  defaultActiveIndex?: number[] | number

  /** Only allow one subtree to be open at a time. */
  exclusive?: boolean

  /** Shorthand array of props for Tree. */
  items: ShorthandValue[]

  /**
   * A custom render function for the title slot.
   *
   * @param {React.ReactType} Component - The computed component for this slot.
   * @param {object} props - The computed props for this slot.
   * @param {ReactNode|ReactNodeArray} children - The computed children for this slot.
   */
  renderItemTitle?: ShorthandRenderFunction
}

export interface TreeState {
  activeIndex: number[] | number
}

/**
 * Allows users to display data organised in tree-hierarchy.
 */
class Tree extends AutoControlledComponent<ReactProps<TreeProps>, TreeState> {
  static create: Function

  static className = 'ui-tree'

  static displayName = 'Tree'

  static propTypes = {
    ...commonPropTypes.createCommon({
      content: false,
    }),
    activeIndex: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    ]),
    defaultActiveIndex: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    ]),
    exclusive: PropTypes.bool,
    items: customPropTypes.collectionShorthand,
    renderItemTitle: PropTypes.func,
    rtlAttributes: PropTypes.func,
  }

  public static defaultProps = {
    as: 'ul',
    accessibility: defaultBehavior,
  }

  static autoControlledProps = ['activeIndex']

  getInitialAutoControlledState({ defaultActiveIndex, exclusive }): TreeState {
    return {
      activeIndex: defaultActiveIndex === undefined ? (exclusive ? -1 : []) : defaultActiveIndex,
    }
  }

  computeNewIndex = (index: number) => {
    const { activeIndex } = this.state
    const { exclusive } = this.props

    if (exclusive) return index
    // check to see if index is in array, and remove it, if not then add it
    return _.includes(activeIndex as number[], index)
      ? _.without(activeIndex as number[], index)
      : [...(activeIndex as number[]), index]
  }

  handleTreeItemOverrides = (predefinedProps: TreeItemProps) => ({
    onTitleClick: (e: React.SyntheticEvent, treeItemProps: TreeItemProps) => {
      this.trySetState({ activeIndex: this.computeNewIndex(treeItemProps.index) })
      _.invoke(predefinedProps, 'onTitleClick', e, treeItemProps)
    },
  })

  renderContent() {
    const { items, renderItemTitle, exclusive } = this.props
    const { activeIndex } = this.state

    return _.map(items, (item: ShorthandValue, index: number) =>
      TreeItem.create(item, {
        defaultProps: {
          index,
          exclusive,
          renderItemTitle,
          open: exclusive ? index === activeIndex : _.includes(activeIndex as number[], index),
        },
        overrideProps: this.handleTreeItemOverrides,
      }),
    )
  }

  renderComponent({ ElementType, classes, accessibility, unhandledProps, styles, variables }) {
    const { children } = this.props

    return (
      <ElementType
        className={classes.root}
        {...accessibility.attributes.root}
        {...rtlTextContainer.getAttributes({ forElements: [children] })}
        {...unhandledProps}
      >
        {childrenExist(children) ? children : this.renderContent()}
      </ElementType>
    )
  }
}

Tree.create = createShorthandFactory({ Component: Tree, mappedArrayProp: 'items' })

export default Tree
