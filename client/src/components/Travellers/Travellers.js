import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  { loadUser, login, logout } from '../../feature/Auth/authSlice'

import classes from './Travellers.module.scss'

const Traveller = React.lazy( () => import('./Traveller') )
const Chat = React.lazy( () => import('../Chat/Chat') )

function Travellers() {
  const dispatch = useDispatch() 
  const user = useSelector( state => state.auth.user )
  const loadingUser = useSelector( state => state.auth.loading )

  if( !loadingUser && user ) { 
    return (
      <div className={ classes.travellers }>
          <div style={{ padding: '20px' }}></div>
  
          <h3 style={{ textAlign: 'center', paddingBottom: '10px' }}>Discover other fellow travellers</h3>
  
          <div className={ classes.smallerScreens}>
              <Traveller />
              <Traveller />
              <Traveller />
          </div>
  
          <div className={ classes.largerScreens }>
            <div className={ classes.travellerList } >
              <Traveller />
              <Traveller />
              <Traveller />
              <Traveller />
              <Traveller />
              <Traveller />
              <Traveller />
              <Traveller />
              <Traveller />
              <Traveller />
              <Traveller />
            </div>
  
            {/* Hidden on smaller screens */}
            <div className={ classes.chat }>
              <Chat />
            </div>
          </div>
  
      </div>
    )
  } else {
    return <h1>LOADING.....</h1>
  }

}

export default Travellers