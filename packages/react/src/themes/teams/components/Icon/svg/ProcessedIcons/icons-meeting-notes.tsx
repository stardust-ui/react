import * as React from 'react'
import cx from 'classnames'
import { TeamsProcessedSvgIconSpec } from '../types'
import { teamsIconSlotClassNames } from '../index'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <g>
        <path
          className={cx(teamsIconSlotClassNames.outline, classes.outlinePart)}
          d="M22 10.5v9.086a1.527 1.527 0 0 1-.113.574 1.473 1.473 0 0 1-.324.488l-2.914 2.914a1.478 1.478 0 0 1-.489.324 1.497 1.497 0 0 1-.574.114H11.5a1.43 1.43 0 0 1-.57-.117 1.549 1.549 0 0 1-.813-.813A1.43 1.43 0 0 1 10 22.5v-12a1.435 1.435 0 0 1 .117-.57 1.549 1.549 0 0 1 .812-.813A1.43 1.43 0 0 1 11.5 9H13v-.273a1.144 1.144 0 0 1 .078-.5A.433.433 0 0 1 13.5 8a.454.454 0 0 1 .469.352 1.494 1.494 0 0 1 .04.32A4.79 4.79 0 0 0 14 9h1.5v-.273a1.144 1.144 0 0 1 .078-.5A.433.433 0 0 1 16 8a.454.454 0 0 1 .469.352 1.494 1.494 0 0 1 .04.32A4.79 4.79 0 0 0 16.5 9H18v-.273a1.144 1.144 0 0 1 .078-.5A.433.433 0 0 1 18.5 8a.454.454 0 0 1 .469.352 1.494 1.494 0 0 1 .04.32A4.79 4.79 0 0 0 19 9h1.5a1.44 1.44 0 0 1 .57.117 1.549 1.549 0 0 1 .813.813 1.435 1.435 0 0 1 .117.57zM17 19h4v-8.5a.507.507 0 0 0-.5-.5H19v1.5a.507.507 0 0 1-.5.5.507.507 0 0 1-.5-.5V10h-1.5v1.5a.507.507 0 0 1-.5.5.507.507 0 0 1-.5-.5V10H14v1.5a.507.507 0 0 1-.5.5.507.507 0 0 1-.5-.5V10h-1.5a.507.507 0 0 0-.5.5v12a.507.507 0 0 0 .5.5H17zm3-5v1h-8v-1zm0 2v1h-8v-1zm-4 2v1h-4v-1zm2 4.789l2.79-2.79H18z"
        />
        <path
          className={cx(teamsIconSlotClassNames.filled, classes.filledPart)}
          d="M22 10.5V19h-5v5h-5.5a1.433 1.433 0 0 1-.57-.117 1.549 1.549 0 0 1-.813-.813A1.431 1.431 0 0 1 10 22.5v-12a1.435 1.435 0 0 1 .117-.57 1.549 1.549 0 0 1 .813-.813A1.433 1.433 0 0 1 11.5 9H13v-.273a1.116 1.116 0 0 1 .086-.5A.417.417 0 0 1 13.5 8a.452.452 0 0 1 .469.352 1.435 1.435 0 0 1 .039.32A5.528 5.528 0 0 0 14 9h1.5v-.273a1.116 1.116 0 0 1 .086-.5A.417.417 0 0 1 16 8a.452.452 0 0 1 .469.352 1.435 1.435 0 0 1 .039.32A5.528 5.528 0 0 0 16.5 9H18v-.273a1.116 1.116 0 0 1 .086-.5A.417.417 0 0 1 18.5 8a.452.452 0 0 1 .469.352 1.435 1.435 0 0 1 .039.32A5.528 5.528 0 0 0 19 9h1.5a1.433 1.433 0 0 1 .57.117 1.549 1.549 0 0 1 .813.813 1.435 1.435 0 0 1 .117.57zM12 14v1h8v-1zm0 2v1h8v-1zm0 2v1h4v-1zm6 5.938V20h3.938a1.474 1.474 0 0 1-.375.648l-2.915 2.915a1.467 1.467 0 0 1-.648.375z"
        />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
