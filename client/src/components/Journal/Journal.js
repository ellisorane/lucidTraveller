import React from 'react'

import classes from './Journal.module.scss'

const JournalEntry = React.lazy( () => import('./JournalEntry') )
const Backdrop = React.lazy( () => import('../Backdrop/Backdrop') )
const FormTemplate = React.lazy( () => import('../FormTemplate/FormTemplate') )

function Journal() {
  const [showAddJournalEntry, setShowAddJournalEntry] = React.useState( false )

  return (
    <div>
      <h2 style={{ textAlign: 'center', paddingTop: '40px', margin: '0' }}>Your Dream Journal</h2>
      <div className={ classes.addJournalEntryDiv }>
        <button className={ classes.addJournalEntry } onClick={ () => setShowAddJournalEntry( true ) }>+</button>
      </div>
      { showAddJournalEntry && <Backdrop click={ () => setShowAddJournalEntry( false ) } /> }
      { showAddJournalEntry && 
        <FormTemplate>
          <h3>Add an Entry</h3>
          <label htmlFor="title">Dream Title:</label><br />
          <input type="text" id="" name="title" placeholder='' /><br />
          <label htmlFor="date">Dream Date:</label><br />
          <input type="date" id="" name="date" /><br />
          <label htmlFor="content">Dream Content: </label><br />
          <textarea type="text" name="content" rows={ 20 } placeholder="" /><br /><br />
          <input type="submit" value="Submit"></input>
        </FormTemplate>
      }

      <JournalEntry />
      <JournalEntry />
    </div>
  )
}

export default Journal