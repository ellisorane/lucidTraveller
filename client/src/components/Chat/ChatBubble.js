import React from 'react'

import classes from './Chat.module.scss'

function ChatBubble( { user, text } ) {
  return (
    <div className={ `${classes.bubble} ${user && classes.userBubble}` }>{ text }</div>
  )
}

export default ChatBubble