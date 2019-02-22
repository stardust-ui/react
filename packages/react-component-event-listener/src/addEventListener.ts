import * as React from 'react'
import { EventHandler, EventTypes } from './types'

const addEventListener = (
  targetRef: React.RefObject<Node>,
  type: EventTypes,
  listener: EventHandler<EventTypes>,
) => {
  const isSupported = targetRef && targetRef.current && targetRef.current.addEventListener

  if (isSupported) {
    targetRef.current.addEventListener(type, listener)
  }

  if (process.env.NODE_ENV !== 'production') {
    if (!isSupported) {
      console.log(
        '@stardust-ui/react-component-event-listener: Passed `targetRef` is not valid or does not support `addEventListener()` method.',
      )
    }
  }
}

export default addEventListener
