import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./features";
import DropDown from "./DropDown";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../images/Logo.png")} alt="logo" />
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
          <NavLink to="/resources" activeStyle>
            Resources
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
