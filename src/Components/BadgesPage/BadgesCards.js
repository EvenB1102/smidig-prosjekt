import React from 'react'
import badge1 from "./BadgesImg/Badge.png"
import badge2 from "./BadgesImg/Badge2.png"

const BadgesCards = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems:"center" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <img src={badge1} alt=''/>
        <img src={badge1} alt=''/>
        <img src={badge1} alt=''/>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <img src={badge2} alt=''/>
        <img src={badge2} alt=''/>
        <img src={badge2} alt=''/>
        </div>

    </div>
  )
}

export default BadgesCards