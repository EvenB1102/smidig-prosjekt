import React from 'react'
import { Link } from 'react-router-dom'
import { ActionButton } from '../ButtonComponents'

const LandingField1 = () => {
  return (
    <div style={{maxWidth: "1150px", marginLeft: "auto", marginRight: "auto"}}>
        <div style={{padding: "3rem"}} >
            <h1>Welcome to Meliora Impact</h1>
            <h3>Who are we?</h3>
            <p>We are a Norwegian female-founded startup changing corporate giving and the way companies and nonprofits connect. We're saving companies resources, help create stable income streams for nonprofits, and create deeper relationships between donor and nonprofit. We help implement solid strategies for impactful and sustainable giving, all in line with the UN SDGs.</p>
        </div>
        <div style={{padding: "3rem"}}>
                <h3>Call to action</h3>
                <p>We are currently in the start up phase of our venture and are looking for co-creators, connect with us if you're a business interested in impactful giving, or a nonprofit that works in line with the SDGs!</p>    
            </div>
            <div  style={{ padding: "3rem 3rem 5rem 3rem" }}>
              <Link to="/about">
                <ActionButton text={"Read more "}/>
                </Link>
        </div>
    </div>
  )
}

export default LandingField1