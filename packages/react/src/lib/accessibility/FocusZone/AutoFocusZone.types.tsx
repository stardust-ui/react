import * as React from 'react'

export interface AutoFocusZoneProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Element type the root element will use. Default is "div".
   */
  as?: React.ReactType

  /**
   * Indicates the selector for first focusable item. By default, the first tabbable element will get focus.
   * @default undefined
   */
  firstFocusableSelector?: string | (() => string)
}
