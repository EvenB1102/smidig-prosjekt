import { ActivityButtons } from "./ButtonComponents";
import watericon from "../images/icons/Water.png"
import educationicon from "../images/icons/Materials.png"
import othericon from "../images/icons/Sort.png"

export function Activity() {
    return (
        <body>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                <h1>Activity</h1>
                <p>Overview over all your donations over a specified period of time</p>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 16}}>
                <ActivityButtons text="Water" color="#709E9B" textcolor="white" icon={watericon}/>
                <ActivityButtons text="Educational" color="rgba(237, 203, 177, 0.44)" icon={educationicon}/>
                <ActivityButtons text="Other" color="rgba(112, 158, 155, 0.11)" icon={othericon}/>
            </div>
        </body>
    )
}