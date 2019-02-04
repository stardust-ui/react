import * as React from 'react'
import cx from 'classnames'
import { TeamsSvgIconSpec } from '../types'
import { teamsIconSlotClassNames } from '../index'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={cx(teamsIconSlotClassNames.outline, classes.outlinePart)}
        d="M11.296 12.622c-.093-.372-.413-.621-.796-.621s-.703.25-.796.622l-1.689 6.756a.5.5 0 1 0 .97.242L9.39 18h2.22l.405 1.621a.5.5 0 1 0 .97-.242l-1.69-6.757zM9.64 17l.86-3.439.86 3.439H9.64zM16 8.5v15a.5.5 0 1 1-1 0v-15a.5.5 0 1 1 1 0zM23.5 19c-.74 0-1.317-.206-1.777-.521.822-1.04 1.176-2.41 1.26-3.479h.517a.5.5 0 1 0 0-1h-.931c-.02-.003-.039-.012-.06-.012h-.001c-.022 0-.04.01-.06.012h-.969a6.238 6.238 0 0 0-.532-1.724.501.501 0 0 0-.894.448c.098.196.314.727.411 1.276H18.5a.5.5 0 1 0 0 1h.522c.082 1.066.433 2.44 1.254 3.48-.46.314-1.036.52-1.776.52a.5.5 0 1 0 0 1c1.047 0 1.862-.317 2.5-.806.636.489 1.452.806 2.5.806a.5.5 0 1 0 0-1zm-1.524-4c-.068.676-.29 1.873-.976 2.784-.687-.913-.905-2.114-.97-2.784h1.946z"
      />
      <path
        className={cx(teamsIconSlotClassNames.filled, classes.filledPart)}
        d="M11.641 12.793a1.046 1.046 0 0 0-2.032 0L8.04 19.069a.75.75 0 1 0 1.455.364l.233-.932h1.794l.233.932a.75.75 0 0 0 1.455-.364l-1.569-6.275zM10.103 17l.522-2.086.522 2.086h-1.044zm6.863-8v14a.966.966 0 0 1-1.932 0V9a.966.966 0 1 1 1.932 0zm6.284 9.5a2.74 2.74 0 0 1-1.122-.229c.608-.866.913-1.913 1.021-2.796h.101a.75.75 0 0 0 0-1.5h-1.614a6.075 6.075 0 0 0-.501-1.56.75.75 0 0 0-1.342.67c.071.144.215.502.31.89h-1.379a.75.75 0 0 0 0 1.5h.109c.106.884.41 1.932 1.017 2.798a2.773 2.773 0 0 1-1.125.227.75.75 0 0 0 0 1.5c.922 0 1.664-.24 2.263-.62.597.38 1.34.62 2.262.62a.75.75 0 0 0 0-1.5zm-1.62-3.025c-.08.517-.254 1.21-.637 1.804-.381-.595-.557-1.287-.637-1.804h1.274z"
      />
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec
