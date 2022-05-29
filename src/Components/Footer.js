import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1 */}
                    <div className="col1">
                        <p style={{fontFamily: "Euclid Circular B", fontSize: "36px", fontStyle: "normal", lineHeight: "120%", fontWeight: "400", position: "relative", left: "60%", top: "15%"}}>Navigate</p>
                        <div className="list1">
                            <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", lineHeight: "120%", fontWeight: "300",color: "#001826",border: "none",backgroundColor: "white"}}>Home</button>
                            <br></br><br></br>
                            <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", lineHeight: "120%", fontWeight: "300",color: "#001826",border: "none",backgroundColor: "white"}}>About</button>
                            <br></br><br></br>
                            <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", lineHeight: "120%", fontWeight: "300",color: "#001826",border: "none",backgroundColor: "white"}}>Contact</button>
                            
                        </div>
                        <div classname="divider"></div>
                       
                        
                        
                    </div>
                    
                    <div className="col2">
                        <div className="list2">
                            <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", lineHeight: "120%", fontWeight: "300",color: "#001826",border: "none",backgroundColor: "white"}}>Questions</button>
                            <br></br><br></br>
                            <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", lineHeight: "120%", fontWeight: "300",color: "#001826",border: "none",backgroundColor: "white"}}>Terms & Conditions</button>
                            <br></br><br></br>
                            <button style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "italic", lineHeight: "120%", fontWeight: "300",color: "#001826",border: "none",backgroundColor: "white"}}>Lorem ipsum</button>
                        </div>
                        </div>
                    
                    
                    {/*Column2 */}
                    <div className="col3">
                    <img style={{position: "relative", top: "30%"}} src={require('../images/logo.png')} alt="logo"/>
                        <p style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "normal", lineHeight: "120%", fontWeight: "400", position: "relative", left: "0%", color: "#001826", top: "20%"}}>Meliora Impact</p>
                        
                    </div>
                    {/*Column3 */}
                    <div className="col3">
                    <p style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "normal", lineHeight: "120%", fontWeight: "400", position: "relative", left: "0%", color: "#001826", top: "20%"}}>Sign up for the Newsletter</p>
                    <p style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "normal", lineHeight: "120%", fontWeight: "400", position: "relative", right: "25%", color: "#001826", top: "25%"}}>Email:</p>
                    <input style={{width: "45%", height: "14%", position: "relative",left: "6%", top: "4%", background: "#ECECEC", border: "none", borderRadius:"15px" }}></input>
                        <div style={{position: "relative", top:"12%", left: "5%"}} classname="social-media-div">
                            <img style={{position: "relative",  width: "13%", margin:"20px"}} src={require('../images/twitter.png')} alt="logo"/>
                            <img style={{position: "relative",  width: "13%", margin:"20px"}} src={require('../images/instagram.png')} alt="logo"/>
                            <img style={{position: "relative",  width: "13%", margin:"20px"}} src={require('../images/facebook.png')} alt="logo"/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Footer;
