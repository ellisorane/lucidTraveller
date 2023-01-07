import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import classes from './Nav.module.scss'

function Nav() {
    const [showNav, setShowNav] = useState(false)

  return (
    <div className={ classes.navbar }>
        <nav>
            <div className={ classes.navBrand }>lucidTravellers</div>

            { showNav && <div className={ classes.navLinks }>
                <div className={ classes.closeNavDiv }>
                    <div>
                        <div className={ classes.navBrand }>lucidTravellers</div>
                        <button className={ classes.closeNav } onClick={ () => setShowNav(!showNav) }>x</button>
                    </div>
                </div>
                <Link className={ classes.navLink } to="/" onClick={ () => setShowNav(false) }>Journal</Link>
                <Link className={ classes.navLink } to="/travellers" onClick={ () => setShowNav(false) }>Travellers</Link>
                <Link className={ classes.navLink } to="/chat" onClick={ () => setShowNav(false) }>Chat</Link>
                <Link className={ classes.navLink } to="/profile" onClick={ () => setShowNav(false) }>Profile</Link>
                <Link className={ classes.navLink } to="/signIn" onClick={ () => setShowNav(false) }>Sign In</Link>
                <Link className={ classes.navLink } to="/signup" onClick={ () => setShowNav(false) }>Sign Up</Link>
                <Link className={ classes.navLink } to="/" onClick={ () => setShowNav(false) }>Logout</Link>
            </div> }

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