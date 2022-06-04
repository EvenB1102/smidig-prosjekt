import About from "../css/About.css"
import image33 from "../images/image33.png"


const AboutUs = () => {
    return (
        <div className="aboutabout">
        <div className="section">
            <div className="container">
                <div className="content-section">
                    <div className="title">
                        <h3>About Us</h3>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="image-section">
                    <img style={{maxWidth: "309px", height: "auto"}} src={image33} alt="Organization"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutUs