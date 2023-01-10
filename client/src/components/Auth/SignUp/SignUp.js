import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logo.png'

import classes from '../Auth.module.scss'


function SignUp() {
  return (
    <div className={ classes.auth }>
        <form className={ classes.authForm }>
            <h2 style={{ marginTop: '0', textDecoration: 'underline' }}>Sign up for lucidTravellers</h2>

            {/* Error */}
            <p style={{ color: 'red' }}>Please enter a valid email.</p>

            <label htmlFor='email'>Email:</label><br />
            <input type="email" name="email" placeholder="Enter your email" /><br />

            <label htmlFor='username'>Username:</label><br />
            <input type="text" name="username" placeholder="Enter your username" /><br />

            <label htmlFor='password'>Password:</label><br />
            <input type="password" name="password" placeholder="Enter your password" /><br />

            <label htmlFor='username'>Confirm Password:</label><br />
            <input type="password" name="confirm" placeholder="Re-enter your password" /><br />
            <input type="submit" name="signUp" value="Sign Up" /><br />

            <Link to="/signIn">Already have an account? Log In here.</Link>
        </form>
    </div>
  )
}

export default SignUp