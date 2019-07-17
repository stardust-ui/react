import { Dropdown, Popup } from '@stardust-ui/react'

const selectors = {
  toggleIndicator: `.${Dropdown.slotClassNames.toggleIndicator}`,
  item: (itemIndex: number) => `.${Dropdown.slotClassNames.itemsList} li:nth-child(${itemIndex})`,
  popupTrigger: `.${Popup.slotClassNames.trigger}`,
}

// https://domoreexp.visualstudio.com/MSTeams/_workitems/edit/534558
const config: ScreenerTestsConfig = {
  themes: ['teams', 'teamsDark', 'teamsHighContrast'],
  steps: [
    (builder, keys) =>
      builder
        .click(selectors.popupTrigger)
        .click(selectors.toggleIndicator)
        .hover(selectors.item(2))
        .snapshot('Prepares to select item out of popup.')
        .click(selectors.item(2))
        .snapshot('Item should be selected.'),
  ],
}

export default config
