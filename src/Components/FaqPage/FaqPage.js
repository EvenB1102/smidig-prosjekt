import React from 'react'
import "../FaqPage/FaqPageCSS/FaqPage.css"
import elipse6 from "./FaqPageImages/Ellipse6.png"


const FaqPage = () => {
  return (
    <div>
    <img style={{display: "flex", position: "absolute", justifyContent: "flex-end", bottom: "-370px", right: "-100px"}} src={elipse6} alt="" />
    <div style={{padding: "30px",}}>
    <></>    
    <div style={{display: "flex", justifyContent: "center", flexDirection: "row"}} ><h1>Frequently Asked Questions</h1></div>
    <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
    <div className="links">
        <h1>Table of Contents</h1>
        <li>General</li>
        <li>Trust & Safety</li>
        <li>Donations</li>
        <li>Subscription</li>
        <li>Organizations</li>  
    </div>
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}} >
    <h3>How do you process payments?</h3>
    <p>Some text explaining the process of payments lorem ipsum voluptate velit esse cillum dolore eu fugiat nulla.</p>
    <h3>Are you eating lunch together?</h3>
    <h3>How often should I wash my hands in a day?</h3>
    <h3>What is the weirdest food combination you enjoy?</h3>
    <h3>Why is this group so awesome in so many ways?</h3>
    <h3>Is it true that Lemonape is Elon Musks sensei?</h3>
    <h3>How fast does snow fall? </h3>
    </div>
    </div>
    </div>
    </div>
  )
}

export default FaqPage