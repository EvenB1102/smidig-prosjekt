import React from "react";
import "./DropDown.css";

const DropDown = () => {
  return (
    <>
      <div class="dropdown" style={{ zIndex: 99, bottom: "28px" }}>
        <button class="dropbtn">
          <img src={require("../Images/Profileicon.png")} alt="logo" style={{width:"40px", height:"40px", borderRadius:"50%"}}/>
        </button>
        <div class="dropdown-content">
          <a href="/profile">Profile</a>
          <a href="/settings">Settings</a>
          <a href="/subscription">Subscription</a>
          <a href="/logIn">Log In</a>
        </div>
      </div>
    </>
  );
};
export default DropDown;
