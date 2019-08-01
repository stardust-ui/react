import * as React from 'react'
import { TeamsProcessedSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M18.305 19.457a2.41 2.41 0 0 0 .195-.957c0-.5-.138-.958-.414-1.375l-3.461 3.46c.417.277.875.415 1.375.415.333 0 .654-.066.96-.2a2.523 2.523 0 0 0 1.344-1.344zM13.5 18.5c0 .5.138.958.414 1.375l3.461-3.46A2.438 2.438 0 0 0 16 16a2.41 2.41 0 0 0-.957.195 2.523 2.523 0 0 0-1.344 1.344c-.133.307-.199.628-.199.961zm5.727-1.344c.182.427.273.875.273 1.344 0 .474-.09.92-.27 1.34-.18.42-.433.793-.761 1.12a3.569 3.569 0 0 1-1.133.767A3.37 3.37 0 0 1 16 22c-.469 0-.914-.091-1.336-.273a3.594 3.594 0 0 1-1.125-.766 3.594 3.594 0 0 1-.766-1.125A3.332 3.332 0 0 1 12.5 18.5c0-.464.091-.909.273-1.336.183-.427.438-.805.766-1.133a3.552 3.552 0 0 1 1.121-.761c.42-.18.866-.27 1.34-.27.469 0 .917.091 1.344.273a3.54 3.54 0 0 1 1.883 1.883zm4.132-3.875c.094.198.141.414.141.649 0 .182-.056.392-.168.629-.112.237-.26.464-.441.683a2.794 2.794 0 0 1-.602.547c-.213.14-.417.211-.61.211-.39 0-.77-.044-1.14-.133a3.788 3.788 0 0 1-1.016-.398 3.026 3.026 0 0 1-.847-.719 2.53 2.53 0 0 1-.488-1 3.583 3.583 0 0 1-.118-.617c-.01-.11-.039-.32-.086-.633l-3.96-.016a13.378 13.378 0 0 1-.282 1.418 2.715 2.715 0 0 1-.398.871c-.188.26-.446.477-.774.649-.328.172-.77.323-1.328.453-.36.083-.664.125-.914.125-.203 0-.413-.068-.629-.203a2.665 2.665 0 0 1-.605-.531 3.042 3.042 0 0 1-.43-.68 1.598 1.598 0 0 1-.164-.656c0-.235.047-.45.14-.649a2.38 2.38 0 0 1 .407-.586c.484-.547 1.146-1.03 1.984-1.453a11.47 11.47 0 0 1 2.516-.922c.88-.213 1.698-.32 2.453-.32.755 0 1.573.107 2.453.32.896.22 1.737.526 2.524.922.833.427 1.492.912 1.976 1.453.177.193.313.388.406.586z" />
    </svg>
  ),
  styles: {},
  exportedAs: 'call-blocked',
} as TeamsProcessedSvgIconSpec
