import React from 'react'
import { Link } from 'react-router-dom'

import classes from './SignIn.module.scss';

function SignIn() {
  return (
    <div className={ classes.signUp }>
        <form className={ classes.signInForm }>
            <h3 style={{ marginTop: '0', textDecoration: 'underline' }}>Login to lucidTravellers</h3>

            {/* Error */}
            <p style={{ color: 'red' }}>Incorrect credentials. Please try again</p>

            <label htmlFor='username'>Username/email:</label><br />
            <input type="text" name="username-or-email" placeholder="Enter your username or email" /><br />

            <label htmlFor='password'>Password:</label><br />
            <input type="password" name="password" placeholder="Enter your password" /><br />

            <input type="submit" name="login" value="Log in" /><br />

            <Link to="/signUp">Don't have an account? Signup here.</Link>
        </form>
    </div>
  )
}

export default SignIn