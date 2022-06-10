import React from 'react'
import image24 from './SettingsPageImg/image24.png'
import image25 from './SettingsPageImg/image25.png'
import image26 from './SettingsPageImg/image26.png'
import image27 from './SettingsPageImg/image27.png'


const SettingsRight = () => {
  return (
    <div style={{width: "50%", }}>
        <div style={{ border: "solid 1px #C4C4C4", paddingLeft: "50px" }}><h1 style={{paddingLeft: "2rem"}}>Your Account</h1></div>
        
        <div style={{display: "flex", flexDirection: "row", alignItems: "center",  paddingLeft: "50px" }}><p>See informastion about your account, download an archive of your data, or learn about yuor deactivation options</p></div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "2em" }}>
        <img style={{ height: "52px", width: "52px", marginLeft:"50px" }} src={image24} alt=""/>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "50px" }}><h2>Account information</h2><p>See your account information like your phone number and email adress.</p></div>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "2em" }}>
        <img style={{ height: "52px", width: "52px", marginLeft:"50px" }} src={image25} alt=""/>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "50px" }}><h2>Change your password</h2><p>Change your password at any time.</p></div>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "2em" }}>
        <img style={{ height: "52px", width: "52px", marginLeft:"50px" }} src={image26} alt=""/>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "50px" }}><h2>Download an archive of your data</h2><p>Get insight into the type of inormation stored for your account</p></div>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "2em" }}>
        <img style={{ height: "52px", width: "52px", marginLeft:"50px" }} src={image27} alt=""/>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "50px" }}><h2>Deactivate your account</h2><p>Find out how you can deactivate your account.</p></div>
        </div>
        


    </div>
  )
}

export default SettingsRight