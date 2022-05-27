import Buttons from "../css/Buttons.css"

export const ActivityButtons = ({text, color, icon}) => {
    return (
        <button style={{background: color, border: "none", borderRadius: 15, width: 120}}>{icon}{text}</button>
    )
}

export const ActionButton = ({text}) => {
    return (
        <button style={{background: "#709E9B" , border: "none", width: "176px", height: "56px", borderRadius: "8px",
        fontSize: "18px", fontFamily: "sans-serif", fontWeight: "600", color: "#FFFFFF"}}>
        {text}
        </button>
    )
}

export const NavButton = ({text}) => {
    return (
        <button className="navButton">{text}</button>
    )
}

