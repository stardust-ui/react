import * as React from 'react'
import { ComponentVariablesInput, ComponentSlotStyle, AnimationProp } from '../themes/types'
import { ShorthandValue, ReactChildren } from '../../types/utils'

export interface StyledComponentProps<P = any, V = any> {
  /** Additional CSS styles to apply to the component instance.  */
  styles?: ComponentSlotStyle<P, V>

  /** Override for theme site variables to allow modifications of component styling via themes. */
  variables?: ComponentVariablesInput
}

export interface AnimatedComponentProps {
  /** Generic animation property that can be used for applying different theme animations. */
  animation?: AnimationProp
}

export interface UIComponentProps<P = any, V = any>
  extends StyledComponentProps<P, V>,
    AnimatedComponentProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Additional CSS class name(s) to apply.  */
  className?: string
}

export interface ContentShorthandComponentProps {
  /** Shorthand for primary content. */
  content?: ShorthandValue
}

export interface ContentNodeComponentProps {
  /** Shorthand for primary content. */
  content?: React.ReactNode
}

export interface ChildrenComponentProps {
  /**
   *  Content for childrenApi
   *  @docSiteIgnore
   */
  children?: ReactChildren
}
