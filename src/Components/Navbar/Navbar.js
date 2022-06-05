import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./features";
import DropDown from "./DropDown";
import { NavButton } from "../ButtonComponents";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../images/correctlogo.png")} alt="logo" />
        </NavLink>
        <Bars />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
          <NavLink to="/donation" activeStyle>
            Donation
          </NavLink>
          <NavLink to="/news" activeStyle>
            News
          </NavLink>
        </NavMenu>

        <DropDown />
      </Nav>
    </>
  );
};

export default Navbar;
