import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { MdSend } from 'react-icons/md'

import classes from './Chat.module.scss'
import defaultUserImg from '../../assets/images/default.jpg'

const Bubble = React.lazy(() => import('./ChatBubble'))

function Chat() {

  const bottomDiv = useRef()

  // Show the most recent messages from the bottom of the chatBody when page is loaded
  useEffect(() => bottomDiv.current.scrollIntoView(), [])

  return (
    <div className={ classes.chat }>
      <div className={ classes.chatHeader }>
        <Link to='/travellers' style={{ fontSize: '1.7rem', color: '#60a0f9' }}><BsFillArrowLeftCircleFill /></Link>
        <img className={classes.userImg} src={ defaultUserImg } alt={ 'Dreamer' } />
        <div className={classes.userName}>Jane Smith</div>
      </div>

      <div className={ classes.chatBody }>
        <div className={ classes.fromOther }>
          <Bubble text='Hi to you too' />
        </div>

        <div className={ classes.fromUser }>
          <Bubble user="me" text='Hi there' />
        </div>

        <div className={ classes.chatBottom } ref={ bottomDiv }></div>
      </div>
        <div className={ classes.chatInputContainer }>
          <input type={ 'text' } name='chat' className={ classes.chatInput } />
          <div style={{ fontSize: '1.7rem', color: 'rgb(98, 98, 98)' }}><MdSend /></div>
        </div>

    </div>
  )
}

export default Chat