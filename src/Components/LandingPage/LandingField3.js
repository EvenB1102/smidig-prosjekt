import React from 'react'
import CharityCard from '../CharityCard'

const LandingField3 = () => {
  return (
    <div>
        <div style={{ padding: "0rem 3rem 3rem 3rem", background: "#EDCBB120", height: "47rem" }}>
        <div style={{ maxWidth: "1120px", padding: "3rem 0rem" }} >
            <div className='landingField34Div' style={{display: "flex", flexDirection: "row", justifyContent: "space-around" , flexFlow: "flow"  }} >
                    <div><CharityCard/></div>
                    <div><CharityCard/></div>
                    <div><CharityCard/></div>               
            </div>
        </div>
        </div>
    </div>
  )
}

export default LandingField3