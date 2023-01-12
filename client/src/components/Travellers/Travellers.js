import React from 'react'

import classes from './Travellers.module.scss'

const Traveller = React.lazy( () => import('./Traveller') )
const Chat = React.lazy( () => import('../Chat/Chat') )

function Travellers() {
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
}

export default Travellers