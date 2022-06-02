import React from 'react'
import PngWing from './SettingsPageImg/PngWing.png'

const SettingsLeft = () => {
  return (
    <div style={{width: "50%",}}>
        <div style={{ border: "solid 1px #C4C4C4" }}><h1 style={{paddingLeft: "2rem"}}>Settings</h1></div>
        
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" , margin: "2em" }}><h2>Your account</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" , margin: "2em" }}><h2>Security and account access</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" , margin: "2em" }}><h2>Privacy and safety</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" , margin: "2em" }}><h2>Notifications</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" , margin: "2em" }}><h2>Accessibility, display, and languages</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" , margin: "2em" }}><h2>Additional resources</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" , margin: "2em" }}><h2>Subscription</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>

        


    </div>
  )
}

export default SettingsLeft