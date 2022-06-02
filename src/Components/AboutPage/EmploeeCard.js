import React from 'react'
import anonymousW from "./AboutImages/AnonymousW.png"
import twitter from "./AboutImages/Twitter.png"
import facebook from "./AboutImages/Facebook-f.png"
import linkedIn from "./AboutImages/LinkedIn.png"
import "../AboutPage/AboutCSS/About.css"

const EmploeeCard = () => {
  return (
    <div style=
    {{
        width: "700px",
        
        display: "flex",
        flexDirection: "row",
        
        justifyContent: "space-around",
    }}>  
    <div style=
    {{
        width: "150px",
        height: "300px",
        borderRadius: "15px",
        boxShadow: "0px 0px 10px -5px",
        padding: "20px 25px 0px 25px",
        background: "white"
    }}> 
    <div style=
    {{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",


        

    }}>
       
    <img style=
    {{
        height: "50px", 
        borderRadius: "50%",
    }} src={anonymousW} alt="Failed to find anonymousW image" />
    
    <h5 style={{color: "#709E9B"}}>COB</h5>
    <h5>Acacia Cristel De Meo</h5>
    <h6 style={{color: "#8B8B8B", fontSize: "8px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</h6>
    </div>
    <div style=
    {{
        display: "flex",
        justifyContent: "space-around",
        zIndex: "10",
        position: "relative",
        bottom: "-10px",
    }}>
    <img className='emploee-logo' src={twitter} alt="Failed to find anonymousW logo" />
    <img className='emploee-logo' src={facebook} alt="Failed to find Facebook logo" />
    <img className='emploee-logo' src={linkedIn} alt="Failed to find LinkedIn logo" /></div>
    </div>
    <div style=
    {{
        width: "150px",
        height: "300px",
        borderRadius: "15px",
        boxShadow: "0px 0px 10px -5px",
        padding: "20px 25px 0px 25px",
        background: "white"
    }}> 
    <div style=
    {{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",

    }}>
       
    <img style=
    {{
        height: "50px", 
        borderRadius: "50%",
    }} src={anonymousW} alt="Failed to find anonymousW image" />
    
    <h5 style={{color: "#709E9B"}}>VCOB</h5>
    <h5>Mara Andrea Lehman</h5>
    <h6 style={{color: "#8B8B8B", fontSize: "8px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</h6>
    </div>
    <div style=
    {{
        display: "flex",
        justifyContent: "space-around",
        zIndex: "10",
        position: "relative",
        bottom: "-10px",
    }}>
    <img className='emploee-logo' src={twitter} alt="Failed to find anonymousW logo" />
    <img className='emploee-logo' src={facebook} alt="Failed to find Facebook logo" />
    <img className='emploee-logo' src={linkedIn} alt="Failed to find LinkedIn logo" /></div>
    </div>
    <div style=
    {{
        width: "150px",
        height: "300px",
        borderRadius: "15px",
        boxShadow: "0px 0px 10px -5px",
        padding: "20px 25px 0px 25px",
        background: "white"
    }}> 
    <div style=
    {{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",

    }}>
       
    <img style=
    {{
        height: "50px", 
        borderRadius: "50%",
    }} src={anonymousW} alt="Failed to find anonymousW image" />
    
    <h5 style={{color: "#709E9B"}}>Title</h5>
    <h5>Firstname Lastname</h5>
    <h6 style={{color: "#8B8B8B", fontSize: "8px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</h6>
    </div>
    <div style=
    {{
        display: "flex",
        justifyContent: "space-around",
        zIndex: "10",
        position: "relative",
        bottom: "-10px",
    }}>
    <img className='emploee-logo' src={twitter} alt="Failed to find anonymousW logo" />
    <img className='emploee-logo' src={facebook} alt="Failed to find Facebook logo" />
    <img className='emploee-logo' src={linkedIn} alt="Failed to find LinkedIn logo" /></div>
    </div>
    </div>
    
  )
}

export default EmploeeCard