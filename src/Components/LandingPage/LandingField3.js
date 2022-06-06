import React from 'react'
import CharityCard from '../CharityCards/CharityCard'
import icon from "../../images/icon.jpeg"


const LandingField3 = () => {
  return (
    <div>
        <div style={{ padding: "0rem 3rem 3rem 3rem", background: "#EDCBB120", alignItems: "center", justifyContent: "center", display: "flex" }}>
        <div style={{ maxWidth: "1120px", padding: "3rem 0rem" }} >
            <div className='landingField34Div' style={{display: "flex", flexDirection: "row", justifyContent: "center" , flexFlow: "flow"  }} >
                    <div><CharityCard {...myElement}/></div>
                    <div><CharityCard {...myElement}/></div>
                    <div><CharityCard {...myElement}/></div>               
            </div>
        </div>
        </div>
    </div>
  )
}

export default LandingField3;

const myElement = {
  title: "Education 4All",
  description: "Our donation goal of building 10 more schools in Africa has been achieved. Meloria Impact are grateful",
  daysleft: 11,
  completeness: 3,
  image: icon
};