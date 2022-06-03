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
            <div style= {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search"
                    name="search" 
                    />
            </div>
            <NavMenu>
                <NavLink to="/explore" activeStyle>
                    Explore
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/resources" activeStyle>
                    Resources
                </NavLink>
                <NavLink to="/news" activeStyle>
                    News
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