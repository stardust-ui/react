import * as React from 'react'
import { Button, Dropdown, Popup } from '@stardust-ui/react'

const inputItems = ['Bruce Wayne', 'Natasha Romanoff', 'Steven Strange']

export const selectors = {
  popupTriggerId: 'trigger',
}

const PopupExample = () => (
  <Popup
    trigger={<Button id={selectors.popupTriggerId} content="Open popup" style={{ margin: 50 }} />}
    content={{
      content: (
        <React.Fragment>
          <div>Hello from inner popup!</div>

          <Dropdown
            items={inputItems}
            placeholder="Select your hero"
            getA11ySelectionMessage={{
              onAdd: item => `${item} has been selected.`,
            }}
          />
        </React.Fragment>
      ),
    }}
  />
)

export default PopupExample
