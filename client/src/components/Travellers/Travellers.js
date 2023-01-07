import React from 'react'

import classes from './Travellers.module.scss'

const Traveller = React.lazy(() => import('./Traveller'))

function Travellers() {
  return (
    <div>
        <div style={{ padding: '20px' }}></div>

        <h3 style={{ textAlign: 'center', paddingBottom: '10px' }}>Discover other fellow travellers</h3>
        
        <Traveller />
        <Traveller />
        <Traveller />
    </div>
  )
}

export default Travellers