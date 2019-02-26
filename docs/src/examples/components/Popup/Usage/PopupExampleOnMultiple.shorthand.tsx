import * as React from 'react'
import { Button, Flex, Popup } from '@stardust-ui/react'

const PopupExampleOnMultiple = () => (
  <Flex gap="gap.smaller">
    <Popup
      trigger={<Button icon="expand" content="Click + Focus" aria-label="Click or focus button" />}
      content="Hello from popup on click!"
      on={['click', 'focus']}
    />
    <Popup
      trigger={<Button icon="expand" content="Hover + Focus" aria-label="Hover or focus button" />}
      content="Hello from popup on hover!"
      on={['hover', 'focus']}
    />
  </Flex>
)

export default PopupExampleOnMultiple
