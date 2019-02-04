import * as React from 'react'
import cx from 'classnames'
import { TeamsProcessedSvgIconSpec } from '../types'
import { teamsIconSlotClassNames } from '../index'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconSlotClassNames.outline, classes.outlinePart)}
          d="M16.5 9.2c.2.1.3.2.4.4l1.7 3.5 3.8.6c.2 0 .4.1.6.3.2.2.2.4.2.7 0 .3-.1.5-.3.7L20.2 18l.6 3.8v.2c0 .3-.1.5-.3.7-.1.1-.2.2-.3.2s-.2.1-.3.1c-.2 0-.3 0-.5-.1L16 21.1l-3.4 1.8c-.1.1-.3.1-.5.1-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7v-.1-.1l.6-3.8L9 15.3c-.2-.2-.3-.4-.3-.7 0-.2.1-.5.2-.7.2-.2.4-.3.6-.3l3.8-.6L15 9.5c.1-.2.2-.3.4-.4s.4-.1.6-.1c.2 0 .4.1.5.2zm-2.2 4.3c-.1.1-.2.3-.3.4-.1.1-.3.2-.4.2l-3.8.6 2.8 2.7c.1.1.2.2.2.3.1.1.1.3.1.4v.2l-.8 3.7 3.4-1.8c.2-.1.3-.1.5-.1s.3 0 .5.1l3.4 1.8-.6-3.8V18c0-.1 0-.3.1-.4.1-.1.1-.2.2-.3l2.8-2.7-3.9-.6c-.2 0-.3-.1-.4-.2-.1-.1-.2-.2-.3-.4L16 10l-1.7 3.5z"
        />
        <path
          className={cx(teamsIconSlotClassNames.filled, classes.filledPart)}
          d="M16.605 8.175c.188.116.33.27.425.461l1.962 3.969 4.38.645c.275.036.508.164.7.385.191.227.286.478.286.752 0 .311-.116.583-.349.816l-3.171 3.09.743 4.363c.013.048.018.08.018.099v.098c0 .305-.113.57-.34.798a1.216 1.216 0 0 1-.377.255 1.065 1.065 0 0 1-.958-.04L16 21.806l-3.924 2.06a1.07 1.07 0 0 1-.528.134 1.06 1.06 0 0 1-.798-.35 1.059 1.059 0 0 1-.35-.797v-.098c0-.018.006-.05.019-.099l.743-4.363-3.171-3.09a1.117 1.117 0 0 1-.35-.816c0-.274.096-.525.287-.752.192-.22.425-.35.7-.385l4.38-.645 1.962-3.969c.095-.19.237-.345.425-.461a1.129 1.129 0 0 1 1.21 0z"
        />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
