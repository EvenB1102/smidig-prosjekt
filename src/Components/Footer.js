import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1 */}
                    <div className="col">
                        <h4>Navigate</h4>
                        <ul className="list-unstyled">
                           <li>Home</li>
                           <li>About</li>
                           <li>Contact</li>
                        </ul>
                        <vl></vl>
                    </div>
                    {/*Column2 */}
                    <div className="col">
                        <image src="https://cdn.logo.com/hotlink-ok/logo-social.png"></image>
                        <h4>Meloria impact</h4>
                        
                    </div>
                    {/*Column3 */}
                    <div className="col">
                        <h6>Sign up for the newsletter</h6>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Footer;
