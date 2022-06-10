import React from 'react'
import PngWing from './SettingsPageImg/PngWing.png'

const SettingsLeft = () => {
  return (
    <div style={{width: "50%"}}>
        <div style={{ border: "solid 1px #C4C4C4", paddingLeft:"50px" }}><h1 style={{paddingLeft: "2rem"}}>Settings</h1></div>
        
        <div className='youraccount' style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  paddingleft: "50", paddingRight: "50px" }}><h2 style={{marginLeft: "2em"}}>Your account</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div className='activediv' style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  paddingleft: "50", paddingRight: "50px" }}><h2 style={{marginLeft: "2em"}}>Security and account access</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div className='activediv' style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  paddingleft: "50", paddingRight: "50px" }}><h2 style={{marginLeft: "2em"}}>Privacy and safety</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div className='activediv' style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  paddingleft: "50", paddingRight: "50px" }}><h2 style={{marginLeft: "2em"}}>Notifications</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div className='activediv' style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  paddingleft: "50", paddingRight: "50px" }}><h2 style={{marginLeft: "2em"}}>Accessibility, display, and languages</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div className='activediv' style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  paddingleft: "50", paddingRight: "50px" }}><h2 style={{marginLeft: "2em"}}>Additional resources</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        <div className='activediv' style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between",  paddingleft: "50", paddingRight: "50px" }}><h2 style={{marginLeft: "2em"}}>Subscription</h2><img style={{ height: "25px", width: "25px" }} src={PngWing} alt=""/></div>
        
        


    </div>
  )
}

export default SettingsLeft