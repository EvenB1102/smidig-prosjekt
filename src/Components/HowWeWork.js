import Work from "../css/Work.css"
import Vector1 from '../images/Vector1.png'
import Vector2 from '../images/Vector2.png'
import Vector3 from '../images/Vector3.png'
import Vector4 from '../images/Vector4.png'


const HowWeWork = () => {
    return (
        <div className="workwork">
        <div className="work-section">
            <div className="work-container">
                <div className="work-content-section">
                    <div className="work-title">
                        <h3>How We Work</h3>
                    </div>
                    <div className="work-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="work-image-section" style={{display: "flex", flexDirection: "row", width: "70px", height: "70px"}}>
                    <img src={Vector1} alt=""></img>&nbsp;&nbsp;&nbsp;
                    <img src={Vector2} alt=""></img>&nbsp;&nbsp;&nbsp;
                    <img src={Vector3} alt=""></img>&nbsp;&nbsp;&nbsp;
                    <img src={Vector4} alt=""></img>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HowWeWork