import React from 'react'
import aboutV from "./AboutImages/AboutV.png"

const About1Frame = () => {
  return (
    <div>
        
        <div style=
        {{
            display: "flex", 
            justifyContent: "flex-start", 
            flexDirection: "column", 
            flexWrap: "wrap", 
            padding: "0px 40px"
        }}>
            <h5 style=
            {{
                display: "flex", 
                justifyContent: "flex-start", 
                color: "#709E9B"
            }}>
                About</h5>
            <h1 style=
            {{display: "flex", 
            justifyContent: "flex-start" 
            }}>The leading platform to give enterprises and companies the chance to give</h1>
            <p style=
            {{
                color: "#8B8B8B"
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                

            
            <img src={aboutV} alt="Failed to find AboutV image" 
            style=
            {{
                maxWidth: "1268px",
                minWidth: "340px",

            }}/>
            



        </div>
    </div>
  )
}

export default About1Frame