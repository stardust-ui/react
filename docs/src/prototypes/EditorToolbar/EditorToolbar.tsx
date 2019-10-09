import {
  Button,
  Divider,
  Flex,
  Form,
  Icon,
  Popup,
  Ref,
  ShorthandValue,
  Text,
  Toolbar,
  ToolbarItemProps,
  ToolbarItemShorthandKinds,
  ToolbarMenuItemProps,
  ToolbarMenuItemShorthandKinds,
} from '@stardust-ui/react'
import {
  documentRef,
  useEventListener,
  windowRef,
} from '@stardust-ui/react-component-event-listener'
import * as keyboardKey from 'keyboard-key'
import * as _ from 'lodash'
import * as React from 'react'

import { EditorToolbarAction, EditorToolbarState, FontFormatting } from './editorToolbarReducer'
import EditorToolbarTable from './EditorToolbarTable'

type EditorToolbarProps = EditorToolbarState & {
  dispatch: React.Dispatch<EditorToolbarAction>
}

type ToolbarItem = ShorthandValue<ToolbarItemProps & { kind?: ToolbarItemShorthandKinds }>
type OverflowItem = ShorthandValue<ToolbarMenuItemProps & { kind?: ToolbarMenuItemShorthandKinds }>

const EditorToolbar: React.FC<EditorToolbarProps> = props => {
  const overflowIndex = React.useRef<number>()

  const linkItemRef = React.useRef<HTMLElement>(null)
  const toolbarRef = React.useRef<HTMLElement>(null)

  const betterItems: {
    toolbarItem: ToolbarItem
    overflowItem?: OverflowItem
  }[] = [
    {
      toolbarItem: {
        key: 'bold',
        icon: 'bold',
        active: props.bold,
        onClick: () => props.dispatch({ type: 'BOLD', value: !props.bold }),
      },
    },
    {
      toolbarItem: {
        key: 'italic',
        icon: 'italic',
        active: props.italic,
        onClick: () => props.dispatch({ type: 'ITALIC', value: !props.italic }),
      },
    },
    {
      toolbarItem: {
        key: 'underline',
        icon: 'underline',
        active: props.underline,
        onClick: () => props.dispatch({ type: 'UNDERLINE', value: !props.underline }),
      },
    },

    { toolbarItem: { key: 'divider-1', kind: 'divider' } },

    { toolbarItem: { key: 'highlight', icon: 'highlight', active: props.fontHighlight } },
    { toolbarItem: { key: 'font-color', icon: 'font-color', active: props.fontColor } },
    { toolbarItem: { key: '', icon: 'font-size', active: props.fontSize } },

    {
      toolbarItem: {
        menu: [
          {
            key: 'heading1',
            content: FontFormatting.Heading1,
            active: props.fontFormatting === FontFormatting.Heading1,
            onClick: () =>
              props.dispatch({ type: 'FONT_FORMATTING', value: FontFormatting.Heading1 }),
          },
          {
            key: 'heading2',
            content: FontFormatting.Heading2,
            active: props.fontFormatting === FontFormatting.Heading2,
            onClick: () =>
              props.dispatch({ type: 'FONT_FORMATTING', value: FontFormatting.Heading2 }),
          },
          {
            key: 'heading3',
            content: FontFormatting.Heading3,
            active: props.fontFormatting === FontFormatting.Heading3,
            onClick: () =>
              props.dispatch({ type: 'FONT_FORMATTING', value: FontFormatting.Heading3 }),
          },
          {
            key: 'paragraph',
            content: FontFormatting.Paragraph,
            active: props.fontFormatting === FontFormatting.Paragraph,
            onClick: () =>
              props.dispatch({ type: 'FONT_FORMATTING', value: FontFormatting.Paragraph }),
          },
        ],
        menuOpen: props.fontFormattingOpen,
        onMenuOpenChange: (e, { menuOpen }) =>
          props.dispatch({ type: 'FONT_FORMATTING_OPEN', value: menuOpen }),
        children: (
          <Flex gap="gap.smaller">
            <Text content={props.fontFormatting} />
            <Icon name="chevron-down" />
          </Flex>
        ),
      },
    },

    {
      toolbarItem: { key: 'remove-format', icon: 'remove-format' },
      overflowItem: { key: 'remove-format', icon: 'remove-format', content: 'Clear formatting' },
    },
    { toolbarItem: { key: 'divider-2', kind: 'divider' } },

    {
      toolbarItem: { key: 'bullets', icon: 'bullets', active: props.itemList },
      overflowItem: {
        key: 'bullets',
        icon: 'bullets',
        active: props.itemList,
        content: 'Bulleted list',
      },
    },
    {
      toolbarItem: { key: 'number-list', icon: 'number-list', active: props.numberList },
      overflowItem: {
        key: 'number-list',
        icon: 'number-list',
        active: props.numberList,
        content: 'Number list',
      },
    },

    { toolbarItem: { key: 'divider-3', kind: 'divider' } },

    {
      toolbarItem: render =>
        render(
          {
            key: 'link',
            icon: 'link',
            active: props.link,
            onClick: () => props.dispatch({ type: 'LINK', value: true }),
          },
          (Component, props) => (
            <Ref innerRef={linkItemRef}>
              <Component {...props} />
            </Ref>
          ),
        ),
      overflowItem: {
        key: 'link',
        icon: 'link',
        content: 'Insert link',
        onClick: () => props.dispatch({ type: 'LINK', value: true }),
      },
    },
    {
      toolbarItem: {
        key: 'code',
        icon: 'code-snippet',
        active: props.code,
      },
      overflowItem: {
        key: 'code',
        icon: 'code-snippet',
        content: 'Code snippet',
        active: props.code,
      },
    },
    {
      toolbarItem: {
        key: 'table',
        icon: 'table',
        content: 'Insert table',
        active: props.table,

        popup: {
          content: (
            <>
              <Text>Insert your table</Text>
              <EditorToolbarTable
                onClick={() => {
                  props.dispatch({ type: 'TABLE', value: false })
                  props.dispatch({ type: 'MORE', value: false })
                }}
              />
            </>
          ),
          onOpenChange: (e, { open }) => props.dispatch({ type: 'TABLE', value: open }),
          open: props.table,
        },
      },
    },
  ]

  const linkItemIndex = betterItems.findIndex(
    item => item.overflowItem && item.overflowItem.key === 'link',
  )
  const linkInOverflowMenu = overflowIndex.current <= linkItemIndex
  const linkTarget = linkInOverflowMenu ? toolbarRef : linkItemRef

  useEventListener({
    listener: (e: KeyboardEvent) => {
      const code = keyboardKey.getCode(e)

      if (code === keyboardKey.K && e.ctrlKey) {
        // Ctrl+K is a browser hotkey, it's required to prevent defaults
        e.preventDefault()
        props.dispatch({ type: 'LINK', value: true })
      }
    },
    type: 'keydown',
    targetRef: documentRef,
  })
  useEventListener({
    listener: () => {
      // All controlled popups should be closed on resize

      if (props.table) {
        props.dispatch({ type: 'TABLE', value: false })
      }

      if (props.link) {
        props.dispatch({ type: 'LINK', value: false })
      }
    },
    type: 'resize',
    targetRef: windowRef,
  })

  console.log('RENDER', linkInOverflowMenu)

  return (
    <>
      <Popup
        content={
          <>
            <Form
              fields={[
                {
                  label: 'URL',
                  name: 'address',
                  id: 'link-address',
                  key: 'address',
                  required: true,
                  inline: true,
                },
              ]}
            />
            <Divider hidden />
            <Flex gap="gap.small" hAlign="end">
              <Button
                content="Cancel"
                onClick={() => props.dispatch({ type: 'LINK', value: false })}
              />
              <Button
                content="Insert"
                onClick={() => props.dispatch({ type: 'LINK', value: false })}
                primary
              />
            </Flex>
          </>
        }
        open={props.link}
        pointing
        target={linkTarget.current}
      />

      <Flex>
        <Ref innerRef={toolbarRef}>
          <Toolbar
            styles={{ minWidth: 0, flexGrow: 1 }} // necessary for Toolbar with overflow inside a flex container
            items={_.map(betterItems, 'toolbarItem')}
            overflow
            overflowOpen={props.more}
            onOverflow={itemsVisible => {
              console.log('onOverflow', itemsVisible)
              overflowIndex.current = itemsVisible - 1
            }}
            onOverflowOpenChange={(e, { overflowOpen }) =>
              props.dispatch({ type: 'MORE', value: overflowOpen })
            }
            getOverflowItems={startIndex => {
              const firstToolbarItem = betterItems[startIndex].toolbarItem
              let actualIndex = startIndex

              // We want to remove first item if it's a divider
              // @ts-ignore
              if (firstToolbarItem.kind === 'divider') {
                actualIndex += 1
              }

              return betterItems
                .slice(actualIndex)
                .map(item => item.overflowItem || item.toolbarItem)
            }}
          />
        </Ref>
        <Toolbar items={[{ icon: { name: 'trash-can', outline: true } }]} />
      </Flex>
    </>
  )
}

export default EditorToolbar