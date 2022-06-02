import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './features';



const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <img src={require('../Images/Logo.png')} alt="logo"/>
            </NavLink>
            <Bars />

            <NavMenu>
                <NavLink to="/About" activeStyle>
                    About
                </NavLink>
                <NavLink to="/Explore" activeStyle>
                    Explore
                </NavLink>
                <NavLink to="/Donation" activeStyle>
                    Donation
                </NavLink>
                <NavLink to="/Organization" activeStyle>
                    Organization
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/profile-sign-in">
                    Sign in
                </NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar