import * as React from 'react'
import { Button } from '@stardust-ui/react'

const ButtonExampleTextShorthand = () => (
  <div>
    <Button text content="A text button" />
    <br />
    <br />
    <Button icon="call-video" text content="A text button with an icon" />
    <br />
    <br />
    <Button icon="team-create" text iconOnly />
  </div>
)

export default ButtonExampleTextShorthand
