import React from 'react'
import news1 from './LandingPageImages/news1.png'
import news2 from './LandingPageImages/news2.png'
import news3 from './LandingPageImages/news3.png'
import news4 from './LandingPageImages/news4.png'
import LinkImg from './LandingPageImages/LinkImg.png'
import { Link } from 'react-router-dom'

const LandingField5 = () => {
  return (
    <div  >
        <div className='landingField51Div' style={{display: "flex", flexDirection: "row", justifyContent: "center",   }} >
            <img className='NewsImg' style={{padding: "5px", maxWidth: "90%", width: "268px", height: "250px"}} src={news1} alt=""/>
            <img className='NewsImg' style={{padding: "5px", maxWidth: "90%", width: "537px", height: "250px"}} src={news2} alt=""/>
        </div>
        <div className='landingField52Div' style={{display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <img className='NewsImg' style={{padding: "5px", maxWidth: "90%", width: "268px", height: "250px"}} src={news3} alt=""/>
            <img className='NewsImg' style={{padding: "5px", maxWidth: "90%", width: "268px", height: "250px"}} src={news4} alt=""/>  
            <div style={{padding: "5px", width: "266px", height: "248px", display: "flex", flexDirection: "column" }} >
                <h3 style={{ textAlign: "center" }} >News and more information</h3>
                
                
                {/*Dette skal bli en link*/}
                <div style={{display: "flex", flexDirection: "row", justifyContent:"flex-end", alignItems: "center ", paddingRight: "20px"  }} >
                  <Link to="/news">
                <p style={{color: "#34B3EF", }}>Read more&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <img style={{ height: "20px", width: "20px" }} src={LinkImg} alt=""/>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingField5