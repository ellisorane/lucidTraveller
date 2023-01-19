import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

import classes from '../Auth.module.scss';

function SignIn() {

  const [ formData, setFormData ] = React.useState({ 
    usernameOrEmail: '',
    password: ''
  })

  const [ errorMsg, setErrorMsg ] = React.useState( null )

  const onChangeFormData = ( e ) => setFormData({ ...formData, [ e.target.name ]: e.target.value });

  const { usernameOrEmail, password } = formData

  const onSubmitHandler = async( e ) => {
    e.preventDefault();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const form = JSON.stringify( { usernameOrEmail, password } );
    let data = new FormData()
    data.append( 'form', form )

    try {
        const res = await axios.post( '/user/login', data, config );
        
        // Check for form error messages from mongoose validation, if no errors then register and log user in
        if( res.data.error ) {

          setErrorMsg( res.data.error )
          
        } else {

          const data = res.data
          console.log( res.data )

          // Reset form
          setFormData({
            usernameOrEmail: '',
            confirm: ''
          });

          // Save user data in the redux authSlice

          // Redirect user to Journal page


        }

        // Scroll back to top of page
        window.scrollTo( 0, 0 )
        
    } catch( err ) {
        console.error( err )
    }
  }

  return (
    <div className={ classes.auth }>
        <form className={ classes.authForm } onSubmit={ (e) => onSubmitHandler(e)}>
            <h2 style={{ marginTop: '0', textDecoration: 'underline' }}>Login to lucidTravellers</h2>

            {/* Error */}
            { errorMsg && <p style={{ color: 'red' }}>{  errorMsg }</p> }

            <label htmlFor='usernameOrEmail'>Username/email:</label><br />
            <input type="text" name="usernameOrEmail" placeholder="Enter your username or email" onChange={ (e) => onChangeFormData(e) } required /><br />

            <label htmlFor='password'>Password:</label><br />
            <input type="password" name="password" placeholder="Enter your password" onChange={ (e) => onChangeFormData(e) } required /><br />

            <input type="submit" name="login" value="Log in" /><br />

            <Link to="/signUp">Don't have an account? Signup here.</Link>
        </form>
    </div>
  )
}

export default SignIn