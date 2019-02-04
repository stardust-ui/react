import * as React from 'react'
import cx from 'classnames'
import { TeamsProcessedSvgIconSpec } from '../types'
import { teamsIconSlotClassNames } from '../index'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <circle
          className={cx(teamsIconSlotClassNames.filled, classes.filledPart)}
          cx="22"
          cy="16"
          r="2"
        />
        <circle
          className={cx(teamsIconSlotClassNames.filled, classes.filledPart)}
          cx="16"
          cy="16"
          r="2"
        />
        <circle
          className={cx(teamsIconSlotClassNames.filled, classes.filledPart)}
          cx="10"
          cy="16"
          r="2"
        />
        <circle
          className={cx(teamsIconSlotClassNames.outline, classes.outlinePart)}
          cx="22"
          cy="16"
          r="1.5"
        />
        <circle
          className={cx(teamsIconSlotClassNames.outline, classes.outlinePart)}
          cx="16"
          cy="16"
          r="1.5"
        />
        <circle
          className={cx(teamsIconSlotClassNames.outline, classes.outlinePart)}
          cx="10"
          cy="16"
          r="1.5"
        />
      </g>
    </svg>
  ),
  styles: {},
  exportedAs: 'more',
} as TeamsProcessedSvgIconSpec
