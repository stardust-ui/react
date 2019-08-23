import * as React from 'react'
import * as keyboardKey from 'keyboard-key'

import { Button, Flex, Input, Toolbar, Ref, Chat } from '@stardust-ui/react'
import { toolbarItems } from './mockData'
import classNames from './classNames'

interface ThreadReplyEditorState {
  editMode: boolean
}

class ThreadReplyEditor extends React.Component<{}, ThreadReplyEditorState> {
  state = {
    editMode: false,
  }

  buttonRef = React.createRef<HTMLElement>()
  inputRef = React.createRef<HTMLElement>()

  renderReplyButton = () => {
    return (
      <Ref innerRef={this.buttonRef}>
        <Button
          fluid
          className={classNames.threadReplies.trigger}
          content="Reply"
          onClick={() => {
            this.setState({ editMode: true }, () => {
              if (this.inputRef && this.inputRef.current) {
                this.inputRef.current.focus()
              }
            })
          }}
        />
      </Ref>
    )
  }

  handleOnEditorKeydown = (e: React.KeyboardEvent) => {
    const eventCode = keyboardKey.getCode(e)
    if (eventCode !== keyboardKey.Escape) {
      return
    }
    this.setState({ editMode: false }, () => {
      if (this.buttonRef && this.buttonRef.current) {
        this.buttonRef.current.focus()
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }

  renderEditor = () => {
    return (
      <Chat.Message className={classNames.replyEditor} onKeyDown={this.handleOnEditorKeydown}>
        <Flex column>
          <Input fluid placeholder="Reply" inputRef={this.inputRef} />
          <Flex space="between">
            <Toolbar items={toolbarItems} aria-label="Editor tools" data-is-focusable={true} />
            <Flex gap="gap.small">
              <Button circular icon="send" iconOnly title="Send reply" text />
            </Flex>
          </Flex>
        </Flex>
      </Chat.Message>
    )
  }

  render() {
    return this.state.editMode ? this.renderEditor() : this.renderReplyButton()
  }
}

export default ThreadReplyEditor