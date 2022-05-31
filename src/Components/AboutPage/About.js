import React from 'react'
import About1Frame from './About1Frame'
import About2Frame from './About2Frame'
import About3Frame from './About3Frame'
import AboutWellKnownOrg from './AboutWellKnownOrg'
import AboutCardContainer from './AboutCardContainer'
import image10 from "./AboutImages/Image10.png"

const About = () => {
  return (
    <div>
      <img style=
      {{
        zIndex: -2,
        position: "absolute",
        right: "-5px",
        top: "30px"

      }} src={image10} alt="Failed to find Image10 image" />
      <div style={{display: "flex", flex: 1, justifyContent: "center" }}>
        <div>
          <About1Frame/>
          <br/>
          <About2Frame/>
          <About3Frame/>
          <br/>
          <AboutWellKnownOrg/>
          <br/>
          <br/>
          <AboutCardContainer/>
          <br/>
          <br/>


          
          
          
        </div>
        
      </div>
    </div>
  )
}

export default About