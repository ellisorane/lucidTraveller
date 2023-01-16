import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logo.png'

import classes from '../Auth.module.scss'


function SignUp() {
  const [ formData, setFormData ] = React.useState({ 
    email: '',
    username: '',
    password: '',
    confirm: ''
  })

  const [errorMsg, setErrorMsg] = React.useState({
    email: '',
    username: '',
    password: '',
    confirm: ''
  })

  const onChangeFormData = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const { email, username, password, confirm } = formData

  const onSubmitHandler = async(e) => {
    e.preventDefault();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const form = JSON.stringify( { email, username, password, confirm } );
    let data = new FormData()
    data.append('form', form)

    try {
        const res = await axios.post('/user/register', data, config);
        console.log(res)
        console.log(res.status)
        // setFormData({
        //   email: '',
        //   username: '',
        //   password: '',
        //   confirm: ''
        // });
        window.scrollTo(0, 0);
        
    } catch(err) {
        console.error(err.message);
    }
  }
  return (
    <div className={ classes.auth }>
        <form className={ classes.authForm } onSubmit={ (e) => onSubmitHandler(e) }>
            <h2 style={{ marginTop: '0', textDecoration: 'underline' }}>Sign up for lucidTravellers</h2>

            {/* Error */}
            <p style={{ color: 'red' }}>Please enter a valid email.</p>

            <label htmlFor='email'>Email:</label><br />
            <input type="email" name="email" placeholder="Enter your email" value={ email }onChange={ (e) => onChangeFormData(e) } /><br />

            <label htmlFor='username'>Username:</label><br />
            <input type="text" name="username" placeholder="Enter your username" value={ username }onChange={ (e) => onChangeFormData(e) } /><br />

            <label htmlFor='password'>Password:</label><br />
            <input type="password" name="password" placeholder="Enter your password" value={ password }onChange={ (e) => onChangeFormData(e) } /><br />

            <label htmlFor='username'>Confirm Password:</label><br />
            <input type="password" name="confirm" placeholder="Re-enter your password" value={ confirm }onChange={ (e) => onChangeFormData(e) } /><br />
            <input type="submit" name="signUp" value="Sign Up" /><br />

            <Link to="/signIn">Already have an account? Log In here.</Link>
        </form>
    </div>
  )
}

export default SignUp