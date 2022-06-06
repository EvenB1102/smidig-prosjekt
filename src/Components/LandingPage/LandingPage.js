import React from 'react'
import landingImg from "./LandingPageImages/LandingImg.png"

import HowMelioraImpactWorks from '../HowMelioraImpactWorks'
import LandingField1 from './LandingField1'
import LandingField2 from './LandingField2'
import LandingField3 from './LandingField3'
import LandingField4 from './LandingField4'
import LandingField5 from './LandingField5'
import  './LandingCSS/LandingPage.css'

const LandingPage = () => {
  return (
    
    <div className='shahid-landing-div'>
        <div>
            <img style={{width: "100%"}} src={landingImg} alt="" />
        </div>    
        <div><LandingField1/></div>
        <div><LandingField2/></div>
        <div><LandingField3/></div>
        <div><LandingField4/></div>
        <div><LandingField5/></div>

        <HowMelioraImpactWorks/>

    </div>
    
    

    
  )
}

export default LandingPage