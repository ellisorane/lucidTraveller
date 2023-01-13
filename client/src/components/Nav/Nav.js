import React, { useState } from 'react'
import { NavLink, Link  } from 'react-router-dom'
import { GrClose } from 'react-icons/gr' 

import logo from '../../assets/images/logo.png'

import classes from './Nav.module.scss'

function Nav() {
    const [showNav, setShowNav] = useState(false)


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
                <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/" onClick={ () => setShowNav(false) }>Journal</NavLink>
                <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/travellers" onClick={ () => setShowNav(false) }>Travellers</NavLink>
                {/* Chat should be integrated into the Travellers page. The nav link is for development only. */}
                {/* <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/chat" onClick={ () => setShowNav(false) }>Chat</NavLink> */}
                <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/profile" onClick={ () => setShowNav(false) }>Profile</NavLink>
                <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/signIn" onClick={ () => setShowNav(false) }>Sign In</NavLink>
                <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/signup" onClick={ () => setShowNav(false) }>Sign Up</NavLink>
                <NavLink className={ ({ isActive }) => isActive ? `${classes.navLink} ${classes.activeNav}` : undefined } to="/logout" onClick={ () => setShowNav(false) }>Logout</NavLink>
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