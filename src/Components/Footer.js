import React from "react";
import "../css/Footer.css";

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
                            <hr style={{position: "relative",right: "7%", bottom: "67px", width: "35%", borderTop: "1px solid black", borderRadius: "5px", transform: "rotate(90deg)", height: "0%" }} classname="divider"></hr>
                        </div>
                        
                       
                        
                        
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
                    <img style={{position: "relative", top: "32%"}} src={require('../images/logo.png')} alt="logo"/>
                        <p style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "normal", lineHeight: "120%", fontWeight: "400", position: "relative", right: "1%", color: "#001826", top: "30%"}}>Meliora Impact</p>
                        
                    </div>
                    {/*Column3 */}
                    <div style={{display: "flex", flex: 1, flexDirection: "column", justifyContent: "center"}}>
                        <div style={{display: "flex", flex: 1, justifyContent: "center", alignItems: "flex-end"}}>
                            <p style={{fontFamily: "Euclid Circular B", fontSize: "24px", fontStyle: "normal", fontWeight: "400", color: "#001826"}}>Sign up for the Newsletter</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
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
