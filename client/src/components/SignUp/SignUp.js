import React from 'react'
import { Link } from 'react-router-dom'

import classes from './SignUp.module.scss';

function SignUp() {
  return (
    <div className={ classes.signUp }>
        <form className={ classes.signupForm }>
            <h3 style={{ marginTop: '0', textDecoration: 'underline' }}>Sign Up for lucidTravellers</h3>

            {/* Error */}
            <p style={{ color: 'red' }}>Please enter a valid email.</p>

            <label htmlFor='email'>Email:</label><br />
            <input type="email" name="email" placeholder="Enter your email" /><br />

            <label htmlFor='username'>Username:</label><br />
            <input type="text" name="username" placeholder="Enter your username" /><br />

            <label htmlFor='password'>Password:</label><br />
            <input type="password" name="password" placeholder="Enter your password" /><br />

            <label htmlFor='username'>Username:</label><br />
            <input type="password" name="confirm" placeholder="Re-enter your password" /><br />
            <input type="submit" name="signUp" value="Sign Up" /><br />

            <Link to="/signIn">Already have an account? Log In here.</Link>
        </form>
    </div>
  )
}

export default SignUp