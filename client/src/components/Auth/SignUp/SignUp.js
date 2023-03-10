import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import  { loadUser, login, logout } from '../../../feature/Auth/authSlice'

import logo from '../../../assets/images/logo.png'

import classes from '../Auth.module.scss'


function SignUp({ getCurrentUser }) {

  const user = useSelector( state => state.auth.user )
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [ formData, setFormData ] = React.useState({ 
    email: '',
    username: '',
    password: ''
  })

  const [ errorMsg, setErrorMsg ] = React.useState([])

  const onChangeFormData = ( e ) => setFormData({ ...formData, [ e.target.name ]: e.target.value });

  const errorHandler = ( errors ) => {
    for( let key in errors ) { 
      // console.log(errors[ key ].message)
      setErrorMsg(prevMsg => [ ...prevMsg, errors[key].message ])
    }
  }

  const { email, username, password } = formData

  const onSubmitHandler = async( e ) => {
    e.preventDefault();

    // Clear previous error messages
    setErrorMsg([])

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    

    const form = JSON.stringify( { email, username, password } );
    let data = new FormData()
    data.append( 'form', form )

    try {
        const res = await axios.post( '/user/register', data, config );
        
        // Check for form error messages from mongoose validation, if no errors then register and log user in
        const errors = res.data.errors
        
        if( errors ) {

          errorHandler( errors )

        } else {

          // console.log( res.data )

          // Reset form
          setFormData({
            email: '',
            username: '',
            password: ''
          });

          // Logout any existing user
          dispatch( logout() )
          // Save user and token data in the redux authSlice
          dispatch( login(res.data) )
          // Load user
          getCurrentUser()
          // Redirect user to Journal page
          navigate( '/' )

        }

        // Scroll back to top of page
        window.scrollTo( 0, 0 )
        
    } catch( err ) {
        console.error( err )
    }
  }

  return (
    <div className={ classes.auth }>
        <form className={ classes.authForm } onSubmit={ (e) => onSubmitHandler(e) }>
            <h2 style={{ marginTop: '0', textDecoration: 'underline' }}>Sign up for lucidTravellers</h2>

            {/* Error */}
            { errorMsg && errorMsg.map( ( error, index ) => <p key={ index } style={{ color: 'red' }}>{ error }</p> ) }  


            <label htmlFor='email'>Email:</label><br />
            <input type="email" name="email" placeholder="Enter your email" value={ email }onChange={ (e) => onChangeFormData(e) } /><br />

            <label htmlFor='username'>Username:</label><br />
            <input type="text" name="username" placeholder="Enter your username" value={ username }onChange={ (e) => onChangeFormData(e) } /><br />

            <label htmlFor='password'>Password:</label><br />
            <input type="password" name="password" placeholder="Enter your password" value={ password }onChange={ (e) => onChangeFormData(e) } /><br />

            <input type="submit" name="signUp" value="Sign Up" /><br />

            <Link to="/signin">Already have an account? Log In here.</Link>
        </form>
    </div>
  )
}

export default SignUp