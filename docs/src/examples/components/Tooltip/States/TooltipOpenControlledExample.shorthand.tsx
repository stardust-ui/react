import * as React from 'react'
import { Button, Tooltip } from '@stardust-ui/react'
import { useBooleanKnob } from '@stardust-ui/docs-components'

const TooltipOpenExample = () => {
  const [open, setOpen] = useBooleanKnob({ name: 'open', initialValue: true })

  return (
    <Tooltip
      open={open}
      onOpenChange={(e, data) => setOpen(data.open)}
      trigger={<Button icon="more" />}
      content="This is a controlled Tooltip"
    />
  )
}

export default TooltipOpenExample
