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
          d="M22.059 9.116a1.639 1.639 0 0 1 .488.328 1.546 1.546 0 0 1 .328.48 1.4 1.4 0 0 1 .117.566v8.477a1.412 1.412 0 0 1-.344.969 2.016 2.016 0 0 1-.883.57 11.764 11.764 0 0 1-2.852.563q-.672.063-1.355.082t-1.566.02q-1.235 0-1.992-.062c-.1 0-.234-.019-.406-.039a7.689 7.689 0 0 0-.414-.016h-.023a.046.046 0 0 1-.031.008l-2.3 2.57a1.073 1.073 0 0 1-.355.27.983.983 0 0 1-.426.1 1.012 1.012 0 0 1-.4-.082.99.99 0 0 1-.332-.23 1.091 1.091 0 0 1-.23-.336.963.963 0 0 1-.082-.391V10.491a1.4 1.4 0 0 1 .117-.566 1.491 1.491 0 0 1 .336-.48 1.546 1.546 0 0 1 .48-.328A1.4 1.4 0 0 1 10.493 9h11a1.4 1.4 0 0 1 .566.116zM10.493 10a.481.481 0 0 0-.352.148.473.473 0 0 0-.148.344V22.96l.007-.008.078.016 2.289-2.555a1.1 1.1 0 0 1 .367-.266 1.065 1.065 0 0 1 .438-.094q.757 0 1.414.055.734.063 1.406.063.429 0 1.328-.023 1.062-.031 2.023-.125a8.5 8.5 0 0 0 1.844-.359q.8-.265.8-.7v-8.473a.473.473 0 0 0-.148-.344.481.481 0 0 0-.346-.147zm4.1 2.148a.481.481 0 0 1 .148.352 1.219 1.219 0 0 1-.094.273q-.125.3-.633 1.383t-.891 1.8l-.07.137-.055.105-.289.574c-.136.268-.245.476-.328.621a2.814 2.814 0 0 1-.2.332 1.308 1.308 0 0 1-.18.184.4.4 0 0 1-.258.086.507.507 0 0 1-.5-.5 1.661 1.661 0 0 1 .2-.617q.125-.265.414-.8l.2-.359.148-.266q-.1-.3-.344-.93-.227-.57-.414-1.172a3.058 3.058 0 0 1-.2-.859.507.507 0 0 1 .5-.5.486.486 0 0 1 .293.094.506.506 0 0 1 .184.25l.617 1.852.961-1.922a.5.5 0 0 1 .441-.266.481.481 0 0 1 .351.148zm3.133.129a1.551 1.551 0 0 1 .516.527 2.468 2.468 0 0 1 .285.691 3.119 3.119 0 0 1 .1.77 4.456 4.456 0 0 1-.312 1.57 3.863 3.863 0 0 1-.9 1.445 2 2 0 0 1-1.422.633 1.4 1.4 0 0 1-1.234-.727 2.352 2.352 0 0 1-.293-.684 3.03 3.03 0 0 1-.1-.762 4.48 4.48 0 0 1 .32-1.57 3.989 3.989 0 0 1 .9-1.453A1.993 1.993 0 0 1 17 12.085a1.358 1.358 0 0 1 .727.192zm-1.594 1.316a3.294 3.294 0 0 0-.562 1.094 3.3 3.3 0 0 0-.2 1.055 2.024 2.024 0 0 0 .117.727q.164.445.508.445a1.13 1.13 0 0 0 .867-.508 3.6 3.6 0 0 0 .57-1.094 3.67 3.67 0 0 0 .2-1.055 2.088 2.088 0 0 0-.117-.734c-.114-.292-.284-.437-.508-.437a1.13 1.13 0 0 0-.874.507zm3.211 3.555a.491.491 0 1 1-.35-.148.481.481 0 0 1 .351.148zm1.75-5a.481.481 0 0 1 .148.352 1.807 1.807 0 0 1-.07.32q-.157.532-.437 1.383-.375 1.071-.5 1.383a3.019 3.019 0 0 1-.164.348 1.118 1.118 0 0 1-.172.215.38.38 0 0 1-.281.1.507.507 0 0 1-.5-.5 1.621 1.621 0 0 1 .078-.328q.148-.539.438-1.375.265-.8.492-1.383a2.241 2.241 0 0 1 .16-.348 1.234 1.234 0 0 1 .176-.215.38.38 0 0 1 .281-.1.481.481 0 0 1 .352.148z"
        />
        <path
          className={cx(teamsIconSlotClassNames.filled, classes.filledPart)}
          d="M22.059 9.116a1.639 1.639 0 0 1 .488.328 1.546 1.546 0 0 1 .328.48 1.4 1.4 0 0 1 .117.566v8.477a1.434 1.434 0 0 1-.332.957 1.942 1.942 0 0 1-.895.582 12.234 12.234 0 0 1-2.852.555q-1.148.11-2.922.109-.492 0-1-.008t-.949-.047c-.1 0-.242-.019-.43-.039a3.893 3.893 0 0 0-.43-.023h-.023a.046.046 0 0 1-.031.008l-2.3 2.57a1.073 1.073 0 0 1-.355.27.983.983 0 0 1-.426.1 1.012 1.012 0 0 1-.4-.082.99.99 0 0 1-.332-.23 1.091 1.091 0 0 1-.23-.336.963.963 0 0 1-.082-.391V10.491a1.4 1.4 0 0 1 .117-.566 1.546 1.546 0 0 1 .328-.48 1.529 1.529 0 0 1 .484-.328A1.433 1.433 0 0 1 10.493 9h11a1.4 1.4 0 0 1 .566.116zm-8.078 2.957a.487.487 0 0 0-.184.2l-.961 1.922-.617-1.852a.506.506 0 0 0-.184-.25.486.486 0 0 0-.292-.093.507.507 0 0 0-.5.5 3.474 3.474 0 0 0 .211.836q.063.211.2.594l.141.391.078.211.2.539.133.391-.234.43a11.66 11.66 0 0 0-.6 1.188 1.133 1.133 0 0 0-.125.422.507.507 0 0 0 .5.5.412.412 0 0 0 .246-.07.962.962 0 0 0 .2-.2 3.015 3.015 0 0 0 .2-.336q.422-.781.742-1.43.461-.921.883-1.812.492-1.024.641-1.375a1.219 1.219 0 0 0 .094-.273.507.507 0 0 0-.5-.5.49.49 0 0 0-.272.067zm1.613.645a4.173 4.173 0 0 0-.906 1.453 4.786 4.786 0 0 0-.238.8 3.876 3.876 0 0 0-.082.766 3.071 3.071 0 0 0 .1.766 2.353 2.353 0 0 0 .293.688 1.394 1.394 0 0 0 1.234.719 1.744 1.744 0 0 0 .75-.168 2.42 2.42 0 0 0 .664-.465 4.107 4.107 0 0 0 .9-1.445 4.786 4.786 0 0 0 .238-.8 3.876 3.876 0 0 0 .082-.766 3.119 3.119 0 0 0-.1-.77 2.468 2.468 0 0 0-.285-.691 1.551 1.551 0 0 0-.516-.527 1.358 1.358 0 0 0-.728-.193 1.949 1.949 0 0 0-1.406.633zm1.914.8a2.088 2.088 0 0 1 .117.734 3.67 3.67 0 0 1-.2 1.055 3.6 3.6 0 0 1-.57 1.094 1.13 1.13 0 0 1-.867.508q-.344 0-.508-.445a2.024 2.024 0 0 1-.117-.727 3.3 3.3 0 0 1 .2-1.055 3.294 3.294 0 0 1 .563-1.094 1.13 1.13 0 0 1 .874-.503c.224 0 .394.146.508.438zm1.133 3.625a.491.491 0 1 0 .352-.143.481.481 0 0 0-.352.148zm1.84-5.066a1.123 1.123 0 0 0-.207.254 2.945 2.945 0 0 0-.133.32q-.218.563-.5 1.4-.344 1.008-.445 1.391a1.46 1.46 0 0 0-.078.3.507.507 0 0 0 .5.5.394.394 0 0 0 .262-.082 1.123 1.123 0 0 0 .207-.254 1.935 1.935 0 0 0 .141-.32q.274-.757.492-1.4.335-.992.453-1.391a2.032 2.032 0 0 0 .07-.3.507.507 0 0 0-.5-.5.394.394 0 0 0-.262.086z"
        />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
