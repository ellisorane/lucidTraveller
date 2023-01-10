import React from 'react'

import classes from './Body.module.scss'

function Body(props) {
  return (
    <div className={ classes.body }>{ props.children }</div>
  )
}

export default Body