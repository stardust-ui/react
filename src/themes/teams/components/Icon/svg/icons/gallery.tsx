import * as React from 'react'
import { TeamsSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg
      viewBox="0 0 32 32"
      role="img"
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="icons-gallery"
    >
      <g role="presentation">
        <g className={classes.outlinePart}>
          <path
            d="M16,9.5v5c0,0.1357,0.0498,0.2529,0.1484,0.3516C16.2471,14.9507,16.3643,15,16.5,15h5
            c0.1357,0,0.2529-0.0493,0.3516-0.1484C21.9502,14.7529,22,14.6357,22,14.5v-4c0-0.2031-0.04-0.3945-0.1211-0.5742
            s-0.1904-0.3384-0.3281-0.4766c-0.1377-0.1377-0.2969-0.2471-0.4766-0.3281C20.8945,9.0405,20.7031,9,20.5,9h-4
            c-0.1357,0-0.2529,0.0498-0.3516,0.1484C16.0498,9.2476,16,9.3647,16,9.5z M17,10h3.5c0.1357,0,0.2529,0.0498,0.3516,0.1484
            C20.9502,10.2476,21,10.3647,21,10.5V14h-4V10z"
          />
          <path
            d="M9.4492,9.4492C9.3115,9.5874,9.2021,9.7461,9.1211,9.9258S9,10.2969,9,10.5v4c0,0.1357,0.0498,0.2529,0.1484,0.3516
            C9.2471,14.9507,9.3643,15,9.5,15h5c0.1357,0,0.2529-0.0493,0.3516-0.1484C14.9502,14.7529,15,14.6357,15,14.5v-5
            c0-0.1353-0.0498-0.2524-0.1484-0.3516C14.7529,9.0498,14.6357,9,14.5,9h-4c-0.2031,0-0.3945,0.0405-0.5742,0.1211
            C9.7461,9.2021,9.5869,9.3115,9.4492,9.4492z M10,10.5c0-0.1353,0.0498-0.2524,0.1484-0.3516C10.2471,10.0498,10.3643,10,10.5,10H14
            v4h-4V10.5z"
          />
          <path
            d="M16.5,22h4c0.2031,0,0.3945-0.04,0.5742-0.1211c0.1797-0.0801,0.3389-0.1895,0.4766-0.3281
            c0.1377-0.1377,0.2471-0.2969,0.3281-0.4766S22,20.7031,22,20.5v-4c0-0.1353-0.0498-0.2524-0.1484-0.3516
            C21.7529,16.0498,21.6357,16,21.5,16h-5c-0.1357,0-0.2529,0.0498-0.3516,0.1484C16.0498,16.2476,16,16.3647,16,16.5v5
            c0,0.1357,0.0498,0.2529,0.1484,0.3516C16.2471,21.9512,16.3643,22,16.5,22z M17,17h4v3.5c0,0.1357-0.0498,0.2529-0.1484,0.3516
            C20.7529,20.9512,20.6357,21,20.5,21H17V17z"
          />
          <path
            d="M9.4492,21.5508c0.1377,0.1387,0.2969,0.248,0.4766,0.3281C10.1055,21.96,10.2969,22,10.5,22h4
            c0.1357,0,0.2529-0.0488,0.3516-0.1484C14.9502,21.7529,15,21.6357,15,21.5v-5c0-0.1353-0.0498-0.2524-0.1484-0.3516
            C14.7529,16.0498,14.6357,16,14.5,16h-5c-0.1357,0-0.2529,0.0498-0.3516,0.1484C9.0498,16.2476,9,16.3647,9,16.5v4
            c0,0.2031,0.04,0.3945,0.1211,0.5742S9.3115,21.4131,9.4492,21.5508z M10,17h4v4h-3.5c-0.1357,0-0.2529-0.0488-0.3516-0.1484
            C10.0498,20.7529,10,20.6357,10,20.5V17z"
          />
        </g>
        <g className={classes.filledPart}>
          <path
            d="M22,15v-4.5c0-0.2031-0.04-0.3955-0.1211-0.5781c-0.0811-0.1821-0.1885-0.3408-0.3242-0.4766
            C21.419,9.31,21.2608,9.2021,21.0781,9.1211C20.8955,9.0405,20.7031,9,20.5,9H16v6H22z"
          />
          <path
            d="M9.4453,21.5547c0.1357,0.1357,0.2939,0.2441,0.4766,0.3242C10.1045,21.96,10.2969,22,10.5,22H15v-6H9v4.5
            c0,0.2031,0.04,0.3965,0.1211,0.5781C9.2021,21.2607,9.3096,21.4199,9.4453,21.5547z"
          />
          <path
            d="M9.4453,9.4453C9.3096,9.581,9.2021,9.7397,9.1211,9.9219C9.04,10.1045,9,10.2969,9,10.5V15h6V9h-4.5
            c-0.2031,0-0.3955,0.0405-0.5781,0.1211C9.7393,9.2021,9.5811,9.3101,9.4453,9.4453z"
          />
          <path
            d="M21.0781,21.8789c0.1826-0.0801,0.3408-0.1885,0.4766-0.3242c0.1357-0.1348,0.2432-0.2939,0.3242-0.4766
            C21.96,20.8965,22,20.7031,22,20.5V16h-6v6h4.5C20.7031,22,20.8955,21.96,21.0781,21.8789z"
          />
        </g>
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec
