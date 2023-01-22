import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr' 
import { NavLink, Link  } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import  { loadUser, login, logout } from '../../feature/Auth/authSlice'

import logo from '../../assets/images/logo.png'

import classes from './Nav.module.scss'

function Nav() {
    const user = useSelector( state => state.auth.user )
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showNav, setShowNav] = useState(false)

    const navLogout = () => {
        dispatch( logout() )
        setShowNav(false)
        navigate( '/signIn' )
    }


  return (
    <div className={ classes.navbar }>
        <nav>
            <div className={ classes.navBrand }><Link to='/'><img src={ logo } alt={ 'Logo' } /></Link></div>

            <div className={ `${ classes.navLinks } ${ showNav ? classes.navOpen : undefined }` }>
                <div className={ classes.closeNavDiv }>
                    <div>
                        <div className={ classes.navBrandOpen } onClick={ () => setShowNav(false) }><Link to='/'><img src={ logo } alt={ 'Logo' } /></Link></div>
                        <button className={ classes.closeNav } onClick={ () => setShowNav(!showNav) }><GrClose /></button>
                    </div>
                </div>
                { user && <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/" onClick={ () => setShowNav(false) }>Journal</NavLink> }
                { user && <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/travellers" onClick={ () => setShowNav(false) }>Travellers</NavLink> }
                {/* Chat should be integrated into the Travellers page. The nav link is for development only. */}
                {/* <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/chat" onClick={ () => setShowNav(false) }>Chat</NavLink> */}
                { user && <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/profile" onClick={ () => setShowNav(false) }>Profile</NavLink> }
                { !user && <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/signin" onClick={ () => setShowNav(false) }>Sign In</NavLink> }
                { !user && <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/signup" onClick={ () => setShowNav(false) }>Sign Up</NavLink> }
                { user && <div className={ classes.navLink } style={{ cursor: 'pointer' }} onClick={ navLogout }>Logout</div> }
            </div>

            <div className={ classes.toggle } onClick={ () => setShowNav(!showNav) }>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    </div>
  )
}

export default Nav