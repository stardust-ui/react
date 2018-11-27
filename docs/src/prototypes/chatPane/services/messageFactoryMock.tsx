import { Attachment, Popup, Button, Menu, popupFocusTrapBehavior } from '@stardust-ui/react'
import * as React from 'react'
import * as _ from 'lodash'
import { ChatMessageProps } from 'src/components/Chat/ChatMessage'
import { DividerProps } from 'src/components/Divider/Divider'
import { StatusProps } from 'src/components/Status/Status'
import { Extendable, ShorthandValue } from 'utils'
import { ChatData, UserStatus, MessageData, UserData, areSameDay, getFriendlyDateString } from '.'

export enum ChatItemTypes {
  message,
  divider,
}

interface ChatItem {
  itemType: ChatItemTypes
}

interface ChatMessage extends ChatMessageProps, ChatItem {
  tabIndex: number
  role: string
  'aria-labelledby': string
  text: string
}
interface Divider extends DividerProps, ChatItem {}

type ChatItemContentProps = ChatMessage | Divider
type StatusPropsExtendable = Extendable<StatusProps>

const statusMap: Map<UserStatus, StatusPropsExtendable> = new Map([
  ['Available', { color: 'green', icon: 'check', title: 'Available' }],
  ['DoNotDisturb', { color: 'red', icon: 'minus', title: 'Do not disturb' }],
  ['Away', { color: 'yellow', icon: 'clock', title: 'Away' }],
  ['Offline', { color: 'grey', title: 'Offline' }],
] as [UserStatus, StatusPropsExtendable][])

function generateChatMsgProps(msg: MessageData, fromUser: UserData): ChatMessage {
  const { content, mine } = msg
  const msgProps: ChatMessage = {
    role: undefined,
    // aria-labelledby will need to by generated based on the needs. Currently just hardcoded.
    'aria-labelledby': `sender-${msg.id} timestamp-${msg.id} content-${msg.id}`,
    content: createMessageContent(msg),
    mine,
    tabIndex: 0,
    timestamp: {
      content: msg.timestamp,
      title: msg.timestampLong,
      id: `timestamp-${msg.id}`,
      // put aria-label as it was not narrating title, where we have already this information.
      // without aria-label it narrates content of the element, which has date in wrong format.
      'aria-label': `${msg.timestampLong}`,
    },
    author: fromUser && {
      content: `${fromUser.firstName} ${fromUser.lastName} `,
      id: `sender-${msg.id}`,
    },
    avatar: !msg.mine && { image: fromUser.avatar, status: statusMap.get(fromUser.status) },
    itemType: ChatItemTypes.message,
    text: content,
  }

  return msgProps
}

function createMessageContent(msg: MessageData): ShorthandValue {
  return {
    id: `content-${msg.id}`,
    content: msg.withAttachment ? createMessageContentWithAttachments(msg.content) : msg.content,
  }
}

function createMessageContentWithAttachments(content: string): JSX.Element {
  const contextMenu = (
    <Menu
      items={[
        { key: 'download', content: 'Download', icon: 'download' },
        { key: 'linkify', content: 'Get link', icon: 'linkify' },
        { key: 'tab', content: 'Make this a tab', icon: 'folder open' },
      ]}
      vertical
      pills
    />
  )

  const actionPopup = (
    <Popup
      accessibility={popupFocusTrapBehavior}
      trigger={
        <Button aria-label="More attachment options" iconOnly circular icon="ellipsis horizontal" />
      }
      content={{ content: contextMenu }}
    />
  )

  return (
    <>
      <span>
        {content} <a href="/"> Some link </a>
      </span>
      <div style={{ marginTop: '20px', display: 'flex' }}>
        {_.map(['MeetingNotes.pptx', 'Document.docx'], (fileName, index) => (
          <Attachment
            icon="file word outline"
            aria-label={`File attachment ${fileName}. Press tab for more options Press Enter to open the file`}
            header={fileName}
            action={{ icon: 'ellipsis horizontal' }}
            renderAction={() => actionPopup}
            data-is-focusable={true}
            styles={{
              '&:focus': {
                outline: '.2rem solid #6264A7',
              },
              ...(index === 1 ? { marginLeft: '15px' } : {}),
            }}
          />
        ))}
      </div>
    </>
  )
}

function generateDividerProps(props: DividerProps): Divider {
  const { content, important, type = 'secondary' } = props
  const dividerProps: Divider = { itemType: ChatItemTypes.divider, content, important, type }

  return dividerProps
}

export function generateChatProps(chat: ChatData): ChatItemContentProps[] {
  if (!chat || !chat.members || !chat.messages) {
    return []
  }

  const { messages, members } = chat
  const chatProps: ChatItemContentProps[] = []

  // First date divider
  chatProps.push(generateDividerProps({ content: getFriendlyDateString(messages[0].date) }))

  for (let i = 0; i < messages.length - 1; i++) {
    const [msg1, msg2] = [messages[i], messages[i + 1]]
    chatProps.push(generateChatMsgProps(msg1, members.get(msg1.from)))

    if (!areSameDay(msg1.date, msg2.date)) {
      // Generating divider when date changes
      chatProps.push(generateDividerProps({ content: getFriendlyDateString(msg2.date) }))
    }
  }

  const lastMsg = messages[messages.length - 1]
  chatProps.push(generateChatMsgProps(lastMsg, members.get(lastMsg.from)))

  // Last read divider
  const myLastMsgIndex = _.findLastIndex(chatProps, item => (item as ChatMessage).mine)
  if (myLastMsgIndex < chatProps.length - 1) {
    chatProps.splice(
      myLastMsgIndex + 1,
      0,
      generateDividerProps({ content: 'Last read', type: 'primary', important: true }),
    )
  }

  return chatProps
}
