import React from 'react'

import classes from './FormTemplate.module.scss'

function FormTemplate( props ) {
  return (
    <form className={ classes.formTemplate }>
        { props.children }
    </form>
  )
}

export default FormTemplate