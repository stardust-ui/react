import * as React from 'react'
import cx from 'classnames'
import { TeamsSvgIconSpec } from '../types'
import { teamsIconClassNames } from '../teamsIconClassNames'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="m16.5 10c0.14062 0 0.25879 0.04834 0.35547 0.14453 0.09668 0.09668 0.14453 0.21484 0.14453 0.35547v11c0 0.13574-0.049805 0.25293-0.14844 0.35156-0.098633 0.099609-0.21582 0.14844-0.35156 0.14844-0.10449 0-0.20312-0.033203-0.29688-0.10156l-3.8667-2.8979h-3.0938c-0.23438 0-0.43457-0.063477-0.60156-0.19141-0.16699-0.12744-0.28613-0.30078-0.35938-0.51953-0.12012-0.35938-0.19629-0.73682-0.23047-1.1328-0.03418-0.39551-0.050781-0.78125-0.050781-1.1562s0.016602-0.76025 0.050781-1.1562c0.03418-0.39551 0.11035-0.77344 0.23047-1.1328 0.073242-0.21875 0.19238-0.3916 0.35938-0.51953 0.16699-0.12744 0.36719-0.19141 0.60156-0.19141h3.0938l3.8667-2.8984c0.09375-0.067383 0.19238-0.10156 0.29688-0.10156zm-7.2573 4c-0.098633 0.32812-0.16406 0.65918-0.19531 0.99219-0.03125 0.3335-0.046875 0.66943-0.046875 1.0078 0 0.33887 0.015625 0.67578 0.046875 1.0117s0.09668 0.66797 0.19531 0.99609l3.2578-0.0078125c0.10449 0 0.20312 0.03418 0.29688 0.10156l3.2026 2.3979v-8.9995l-3.2026 2.3984c-0.09375 0.067871-0.19238 0.10156-0.29688 0.10156h-3.2578zm14.757 0c0 0.13574-0.049805 0.25293-0.14844 0.35156l-1.6406 1.6484 1.6406 1.6484c0.098633 0.099121 0.14844 0.21631 0.14844 0.35156 0 0.13574-0.049805 0.25293-0.14844 0.35156-0.098633 0.099121-0.21582 0.14844-0.35156 0.14844s-0.25293-0.049316-0.35156-0.14844l-1.6484-1.6484-1.6484 1.6484c-0.098633 0.099121-0.21582 0.14844-0.35156 0.14844s-0.25293-0.049316-0.35156-0.14844c-0.098633-0.098633-0.14844-0.21582-0.14844-0.35156 0-0.13525 0.049805-0.25244 0.14844-0.35156l1.6484-1.6484-1.6484-1.6484c-0.098633-0.098633-0.14844-0.21582-0.14844-0.35156 0-0.13525 0.049805-0.25244 0.14844-0.35156 0.098633-0.098633 0.21582-0.14844 0.35156-0.14844s0.25293 0.049805 0.35156 0.14844l1.6484 1.6406 1.6484-1.6406c0.098633-0.098633 0.21582-0.14844 0.35156-0.14844s0.25293 0.049805 0.35156 0.14844c0.098633 0.099121 0.14844 0.21631 0.14844 0.35156z"
        />
      </g>
      <g>
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="m16.5 10c0.14062 0 0.25879 0.04834 0.35547 0.14453 0.09668 0.09668 0.14453 0.21484 0.14453 0.35547v11c0 0.13574-0.049805 0.25293-0.14844 0.35156-0.098633 0.099609-0.21582 0.14844-0.35156 0.14844-0.10938 0-0.20801-0.033203-0.29688-0.10156l-3.8667-2.8979h-3.0938c-0.22363 0-0.4248-0.063477-0.60156-0.19141-0.17676-0.12744-0.29688-0.30078-0.35938-0.51953-0.10938-0.36963-0.18359-0.74707-0.22266-1.1328-0.039062-0.38525-0.058594-0.77051-0.058594-1.1562 0-0.38525 0.019531-0.77051 0.058594-1.1562 0.039062-0.38525 0.11328-0.7627 0.22266-1.1328 0.0625-0.21875 0.18262-0.3916 0.35938-0.51953 0.17676-0.12744 0.37793-0.19141 0.60156-0.19141h3.0938l3.8667-2.8984c0.088867-0.067383 0.1875-0.10156 0.29688-0.10156zm7.5 4c0 0.13574-0.049805 0.25293-0.14844 0.35156l-1.6406 1.6484 1.6406 1.6484c0.098633 0.099121 0.14844 0.21631 0.14844 0.35156 0 0.13574-0.049805 0.25293-0.14844 0.35156-0.098633 0.099121-0.21582 0.14844-0.35156 0.14844s-0.25293-0.049316-0.35156-0.14844l-1.6484-1.6484-1.6484 1.6484c-0.098633 0.099121-0.21582 0.14844-0.35156 0.14844s-0.25293-0.049316-0.35156-0.14844c-0.098633-0.098633-0.14844-0.21582-0.14844-0.35156 0-0.13525 0.049805-0.25244 0.14844-0.35156l1.6484-1.6484-1.6484-1.6484c-0.041992-0.041504-0.077148-0.094727-0.10547-0.16016-0.02832-0.064941-0.042969-0.12891-0.042969-0.19141 0-0.13525 0.049805-0.25244 0.14844-0.35156 0.098633-0.098633 0.21582-0.14844 0.35156-0.14844s0.25293 0.049805 0.35156 0.14844l1.6484 1.6406 1.6484-1.6406c0.098633-0.098633 0.21582-0.14844 0.35156-0.14844s0.25293 0.049805 0.35156 0.14844c0.098633 0.099121 0.14844 0.21631 0.14844 0.35156z"
        />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec
