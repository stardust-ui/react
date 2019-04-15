import * as React from 'react'
import { Header } from '@stardust-ui/react'
import DocPage from '../components/DocPage'
import CodeSnippet from '../components/CodeSnippet'
import { code, link } from '../utils/helpers'
import { Link } from 'react-router-dom'

export default () => (
  <DocPage title="Accessibility Behaviors">
    <Header as="h2">Content</Header>
    <ul>
      <li>{link('Overview', 'accessibility-behaviors#overview')}</li>
      <li>{link('ARIA attributes', 'accessibility-behaviors#aria-attributes')}</li>
      <li>{link('Overriding behaviors', 'accessibility-behaviors#overriding-behaviors')}</li>
    </ul>
    <Header as="h2">Overview</Header>
    <p>
      In Stardust, accessibility behaviors encapsulate the logic needed for keyboard navigation,
      focus handling and screen reading. They essentially add ARIA roles, ARIA attributes and event
      handlers to components' parts. The idea is to compose visual components and apply a behavior
      on top of them to achieve the desired keyboard navigation and screen reader support.
    </p>
    <p>
      Each relevant component comes with its default accessibility behavior. For some components
      there are additional behaviors to choose from. In addition to that, user can create custom
      behaviors and use them instead of the standard ones.
    </p>
    <p>
      Users are also able to add or override attributes generated by the accessibility behaviors if
      customization is needed.
    </p>
    <p>
      Accessibility behavior type is a callback function which receives "props" as parameters and
      returns an accessibility behavior object. Type:{' '}
      {code('(props: any) => AccessibilityDefinition')}.
    </p>

    <div>
      This {code('AccessibilityDefinition')} object consist of next properties which can be set in
      behavior:
      <ul>
        <li>
          <b>attributes</b> - ARIA or any other attributes that can be applied to component's parts.
          <p>Type: {code('{ [partName: string]: AccessibilityAttributes }')}.</p>
        </li>
        <li>
          <b>keyActions</b> - Actions that can be executed when specified keys are pressed. Action
          names are mapped to action handlers in component and can be also assigned to particular
          component's parts.
          <p>Type: {code('{ [partName: string]: { [actionName: string]: KeyAction } }')}.</p>
        </li>
        <li>
          <b>focusZone</b> - In components such as {code('Menu')}, {code('List')}, {code('Toolbar')}{' '}
          and
          {code('Grid')}, {code('FocusZone')} provides arrow key navigation between their child
          items, such as list items and menu items. At the same time it is possible to TAB between
          these navigable components (navigate between Menu and List components by pressing TAB and
          use arrow keys to navigate between their items).{' '}
          <Link to="focus-zone">Read more about FocusZone.</Link>
          <p>Type: {code('{ mode: FocusZoneMode, props?: FocusZoneProps }')}.</p>
        </li>
        <li>
          <b>focusTrap</b> - {code('FocusTrapZone')} grabs the focus and traps it within an HTML
          element, usually a dialog or popup.{' '}
          <Link to="focus-trap-zone">Read more about FocusTrapZone.</Link>
          <p>Type: {code('FocusTrapZoneProps | boolean')}.</p>
        </li>
        <li>
          <b>autoFocus</b> - {code('AutoFocusZone')} is used to grab focus and put it to inner
          element when component mounts. For example, when it is needed to focus an inner element in
          the Popup when it mounts. If true, it is enabled with default properties or can be
          modified by setting object.{' '}
          <Link to="auto-focus-zone">Read more about AutoFocusZone.</Link>
          <p>Type: {code('AutoFocusZoneProps | boolean')}.</p>
        </li>
      </ul>
    </div>

    <Header as="h2">ARIA attributes</Header>
    <p>
      Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make
      web content more accessible to people with disabilities.
    </p>
    <p>
      ARIA attributes are applied according to{' '}
      {link('ARIA specification', 'https://www.w3.org/TR/wai-aria-1.1/', true)} and{' '}
      {link('ARIA best practices', 'https://www.w3.org/TR/wai-aria-practices-1.1/', true)}.
    </p>
    <p>For example, Menu component:</p>
    <CodeSnippet
      value={`
        const items = [
         {key: "editorials", content: "Editorials"} ,
         {key: "review", content: "Reviews" },
         {key: "events", content: "Upcoming Events" },
        ]

       const menu = <Menu items={items} />
      `}
    />
    <p>
      Default accessibility behavior for {code('Menu')} component is {code('menuBehavior')} (
      {code('menuItemBehavior')} for the {code('MenuItem')}). These behaviors add appropriate ARIA
      roles by default:
    </p>
    <p>Rendered HTML:</p>
    <CodeSnippet
      mode="html"
      label="App.jsx"
      value={`
        <ul role="menu" class="ui-menu ">
          <li class="ui-menu__item " role="presentation">
            <a class="ui-menu__item__anchor " role="menuitem" tabindex="0">Editorials</a>
          </li>
          <li class="ui-menu__item " role="presentation">
            <a class="ui-menu__item__anchor " role="menuitem" tabindex="0">Reviews</a>
          </li>
          <li class="ui-menu__item " role="presentation">
            <a class="ui-menu__item__anchor " role="menuitem" tabindex="0">Upcoming Events</a>
          </li>
        </ul>
      `}
    />
    <p>Menu behavior - role "menu" is applied to root part (container) of the component:</p>
    <CodeSnippet
      label={'menuBehavior.tsx'}
      value={`
      const menuBehavior: Accessibility = (props: any) => ({
        //...
        attributes: {
          root: {
            role: 'menu',
          },
        },
       //...
      })
      `}
    />
    <p>
      Menu item behavior - role "presentation" is applied to wrapper part of the component (which is{' '}
      {code('<li>')}
      element by default) and role "menuitem" and other attributes applied to the root part of the
      component (which is {code('<a>')}
      element by default):
    </p>
    <CodeSnippet
      label={'menuItemBehavior.tsx'}
      value={`
      const menuItemBehavior: Accessibility = (props: any) => ({
        //...
        attributes: {
          wrapper: {
            role: 'presentation',
          },
          root: {
            role: 'menuitem',
            tabIndex: 0,
            'aria-expanded': props.menu ? props.menuOpen || false : undefined,
            'aria-haspopup': props.menu ? 'true' : undefined,
            'aria-label': props['aria-label'],
            'aria-labelledby': props['aria-labelledby'],
            'aria-describedby': props['aria-describedby'],
            'aria-disabled': !_.isNil(props['aria-disabled'])
              ? props['aria-disabled']
              : !!props['disabled']
              ? true
              : undefined,
            [IS_FOCUSABLE_ATTRIBUTE]: !props['disabled'],
            'aria-posinset': props.itemPosition,
            'aria-setsize': props.itemsCount,
          },
        },
        //...
      })
      `}
    />

    <Header as="h2" content="Overriding behaviors" />
    <p>
      User can override the default behavior by using the {code('accessibility')} attribute, as well
      as override generated attributes:
    </p>
    <CodeSnippet label="App.jsx" value={`<Menu accessibility={tabListBehavior} />`} />
    <Header as="h4" content="Creating new behavior" />
    <p>
      Apart from overriding the default behavior with an existent one, it is also possible to create
      your own custom behavior.
    </p>
    <CodeSnippet
      label={'newBehavior.tsx'}
      value={`
      const newBehavior: Accessibility = (props: any) => ({
        attributes: {
          root: {
            //...
          },
        },
        keyActions: {
          root: {
            //...
          },
        },
        focusZone: {},
        focusTrap: {},
        autoFocus: {},
      })
      `}
    />

    <p>
      Also, if a particular behavior matches your needs but you want to change some of the props,
      you can create a new behavior based on an existent one and override what is needed.
    </p>
    <p>
      For example, using {code('menuBehavior')}, creates a new behavior with some of its FocusZone's
      props overridden.
    </p>
    <CodeSnippet
      label="chatBehavior.ts"
      value={`
      const overridenMenuBehavior: Accessibility = (props: any) => {
        const behavior = menuBehavior(props)
      
        behavior.focusZone.props.defaultTabbableElement = (root: HTMLElement): HTMLElement => {
          return root.querySelector(".ui-menu__item__wrapper:last-child")
        }
      
        return behavior
      }
      `}
    />

    <CodeSnippet label="App.jsx" value={`<Menu accessibility={overridenMenuBehavior} />`} />
    <p>
      All Stardust behaviors implementations can be found on the{' '}
      {link(
        'GitHub',
        'https://github.com/stardust-ui/react/tree/master/packages/react/src/lib/accessibility/Behaviors',
      )}
      .
    </p>
    <Header as="h4" content="Available Behaviors" />
    <p>
      The default and other available behaviors for all the components can be found in the{' '}
      {link('documentation', 'https://stardust-ui.github.io/react/')}, together with notes on other
      accessibility considerations for using the component. The examples show the recommended way of
      using the components in different variations. It is possible to edit example's code, see the
      rendered HTML, change themes and validate the rendering in RTL scenario, or with different
      behaviors.
    </p>

    <p>
      Read more about:
      <ul>
        <li>
          <Link to="focus-zone">FocusZone</Link>
        </li>
        <li>
          <Link to="focus-trap-zone">FocusTrapZone</Link>
        </li>
        <li>
          <Link to="auto-focus-zone">AutoFocusZone</Link>
        </li>
      </ul>
    </p>
  </DocPage>
)
