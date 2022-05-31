import React from 'react'
import EmploeeCard from './EmploeeCard'

const AboutCardContainer = () => {
  return (
    <div>
        <div style=
        {{
            background: "#EDCBB120",
            height: "20px",
            position: "absolute",
            display: "block",
            zIndex: "-10",
            width: "3500px",
            top: "2426px",
        }}></div>
        <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            <div style=
            {{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <h5 style=
                {{ 
                    color: "#709E9B"
                }}>Meet Our Team</h5>
                <h1>Meliora Impact</h1>
                <p style=
                {{
                    color: "#8B8B8B"
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

            </div>
            <div style=
            {{
                zIndex: "5",
            }}>
                <br/>
                <br/>
                <EmploeeCard/>
                <br/>
            </div>
        </div>

    </div>
  )
}

export default AboutCardContainer