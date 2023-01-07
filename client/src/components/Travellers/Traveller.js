import React from 'react'
import { MdOutlineChat } from 'react-icons/md'
import { BsJournals } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import classes from './Travellers.module.scss'
import defaultUserImg from '../../assets/images/default.jpg'

function Traveller ({ isFriend }) {
  return (
    <div className={ classes.traveller }>
      <img className={classes.userImg} src={ defaultUserImg } alt={ 'Dreamer' } />
      <div>
        <p><strong>Jane Smith</strong></p>
        <p><strong>Lucid Level: </strong> Beginner</p>
      </div>

      <div className={ classes.travellerActions }>
        <Link to="/chat"><button title={ 'Chat' } style={{ color: '#60a0f9' }}><MdOutlineChat /></button></Link>
        {/* Goes to travellers/username/journal */}
        <button title={ 'Dream Journal' }><BsJournals /></button> 
      </div>
    </div>
  )
}

export default Traveller