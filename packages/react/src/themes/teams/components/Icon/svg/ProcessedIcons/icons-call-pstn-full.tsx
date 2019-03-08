import * as React from 'react'
import { TeamsProcessedSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M15.336 20.086c-.23.02-.487.031-.774.031a12.06 12.06 0 0 1-2.414-.258c-1.042-.213-1.875-.534-2.5-.96-.765-.522-1.148-1.175-1.148-1.962v-.5c0-.12.042-.222.125-.308a.407.407 0 0 1 .305-.13h10.117c.01.366.079.698.207.997s.316.592.566.88l-.976 1.398a2.968 2.968 0 0 0-1.117-.235c-.438 0-.851.091-1.239.274-.387.181-.772.44-1.152.773zM14.5 14c-.401 0-.783-.078-1.145-.235-.362-.156-.683-.375-.964-.656s-.5-.602-.657-.965A2.856 2.856 0 0 1 11.5 11c0-.401.078-.784.234-1.149a3.07 3.07 0 0 1 1.621-1.62C13.717 8.076 14.1 8 14.5 8c.4 0 .785.078 1.152.234a3.03 3.03 0 0 1 1.614 1.613c.156.368.234.752.234 1.153s-.077.782-.23 1.144c-.154.363-.372.684-.653.965s-.604.5-.969.656A2.887 2.887 0 0 1 14.5 14zm3.227 6.04c-.308 0-.672.114-1.094.343-.411.229-.771.51-1.078.844-.328.353-.492.684-.492.992 0 .203.027.408.082.617.054.208.133.396.238.563.11.187.247.334.414.441.167.107.354.16.562.16.245 0 .628-.112 1.149-.336.323-.13.692-.307 1.11-.53a9.99 9.99 0 0 0 2.034-1.509 9.267 9.267 0 0 0 2.516-4.21 9.432 9.432 0 0 0 .332-2.509c0-.286-.015-.527-.043-.723s-.085-.365-.168-.511a.927.927 0 0 0-.41-.364c-.175-.08-.402-.12-.684-.12h-.199c-.102 0-.21.005-.328.015-.117.01-.23.039-.34.086-.182.073-.354.21-.516.41-.16.2-.301.436-.421.707-.11.25-.197.508-.262.773s-.098.498-.098.696c0 .208.029.396.086.562a2.254 2.254 0 0 0 .465.782c.086.099.188.207.305.324l.222.223-1.922 2.758-.343-.164c-.24-.12-.485-.211-.735-.274a1.574 1.574 0 0 0-.382-.047z" />
    </svg>
  ),
  styles: {},
  exportedAs: 'call-pstn',
} as TeamsProcessedSvgIconSpec
