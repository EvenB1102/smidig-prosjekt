import { ActivityButtons } from "./ButtonComponents";
import watericon from "../images/icons/Water.png"
import educationicon from "../images/icons/Materials.png"
import othericon from "../images/icons/Sort.png"
import History from "./History";

export function Activity() {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div style={{paddingLeft: 80}}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                <h1>Activity</h1>
                <p>Overview over all your donations over a specified period of time</p>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 16}}>
                <ActivityButtons text="Water" color="#709E9B" textcolor="white" icon={watericon}/>
                <ActivityButtons text="Educational" color="rgba(237, 203, 177, 0.44)" icon={educationicon}/>
                <ActivityButtons text="Other" color="rgba(112, 158, 155, 0.11)" icon={othericon}/>
            </div>
            </div>

            <div style={{paddingTop: 50, paddingBottom: 70}}>
                <img src={require("../images/Graph.png")} />
            </div>

            <History />
        </div>
    )
}