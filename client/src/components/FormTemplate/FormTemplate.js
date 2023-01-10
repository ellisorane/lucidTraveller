import React from 'react'

import classes from './FormTemplate.module.scss'

function FormTemplate( props ) {
  return (
    <form className={ `${ classes.formTemplate } ${ props.showForm ? classes.showForm : undefined }` }>
        { props.children }
    </form>
  )
}

export default FormTemplate