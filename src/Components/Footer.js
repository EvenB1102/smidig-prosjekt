import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="footer-container">
                <div className="row">
                    <div style={{display: "flex", flex: 1, flexDirection: "column", alignItems: "center"}}>
                        <div style={{display: "flex", flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "flex-end"}}>
                            <h1 style={{fontFamily: "Euclid Circular B", fontSize: "36px", fontStyle: "normal", fontWeight: "400", color: "#001826"}}>Navigate</h1>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div style={{display: "flex", flex: 1, flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between"}}>
                                <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", fontWeight: "300",color: "#001826",border: "none", textAlign: "left",backgroundColor: "white", paddingLeft: 70}}>Home</button>
                                <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", fontWeight: "300",color: "#001826",border: "none", textAlign: "left",backgroundColor: "white", paddingLeft: 70}}>About</button>
                                <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", fontWeight: "300",color: "#001826",border: "none", textAlign: "left",backgroundColor: "white", paddingLeft: 70}}>Contact</button>
                            </div>
                                <div style={{height: 100, width: 1, background: "black"}}></div>
                            <div style={{display: "flex", flex: 1, flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between"}}>
                                <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", fontWeight: "300",color: "#001826",border: "none", textAlign: "left", backgroundColor: "white", paddingLeft: 50}}>Questions</button>
                                <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", fontWeight: "300",color: "#001826",border: "none", textAlign: "left", backgroundColor: "white", paddingLeft: 50}}>Terms & Conditions</button>
                            </div>
                        </div>
                    </div>
                    
                    {/*Column2 */}
                    <div className="col3">
                    <img style={{position: "relative", top: "32%"}} src={require('../images/logoFooter.png')} alt="logo"/>
                        <p style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "normal", lineHeight: "120%", fontWeight: "400", position: "relative", right: "1%", color: "#001826", top: "30%"}}>Meliora Impact</p>
                        
                    </div>
                    {/*Column3 */}
                    <div style={{display: "flex", flex: 1, flexDirection: "column", justifyContent: "center"}}>
                        <div style={{display: "flex", flex: 1, justifyContent: "center", alignItems: "flex-end"}}>
                            <p style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "normal", fontWeight: "400", color: "#001826"}}>Sign up for the Newsletter</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "15px"}}>
                            <p style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "normal", fontWeight: "400", color: "#001826"}}>Email</p>
                            <input style={{width: "45%", height: 40, background: "#ECECEC", border: "none", borderRadius:"15px" }}></input>
                        </div>
                        <div style={{display: "flex", flex: 1, flexDirection: "row", alignSelf: "center", alignItems: "center", justifyContent: "space-between"}}>
                            <img style={{height: 70, padding: 25}} src={require('../images/twitter.png')} alt="logo"/>
                            <div style={{height: 100, width: 1, background: "black"}}></div>
                            <img style={{height: 70, padding: 25}} src={require('../images/instagram.png')} alt="logo"/>
                            <div style={{height: 100, width: 1, background: "black"}}></div>
                            <img style={{height: 70, padding: 25}} src={require('../images/facebook.png')} alt="logo"/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Footer;
