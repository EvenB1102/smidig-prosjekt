import React from "react";

const HowMelioraImpactWorks = () => {
    return(
        <div style={{top: "0", position: "relative", height: "fit-content"}} className="main">
            <div className="container">
                <div style={{display: "flex", flexFlow:"row wrap", flex: "1 0 100%", backgroundColor: "white"}} className="row">
                    <div style={{flex: "0 1 100%",textAlign: "center"}} classname="col">
                        <p style={{fontFamily: "Euclid Circular B", fontSize: "45px", fontStyle: "normal", lineHeight: "120%", fontWeight: "600", position: "relative", color: "#001826"}}>How Meloria Impact Works</p>
                        <p style={{fontFamily: "Euclid Circular B", fontSize: "20px", fontStyle: "normal", lineHeight: "135%", fontWeight: "400", position: "relative", color: "#0E161B"}}>Meloria Impact is the best place to fundraise as an organization</p>
                        <div classname="HowWeWorkImage">
                            <img style={{width: "43%"}} src={require('../images/HowWeWork.png')} alt="logo"/>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "rgba(237, 203, 177, 0.2)", borderRadius: "35%"}}>
                    <div style={{display: "flex", flexFlow:"row wrap", flex: "1 0 100%"}} className="row">
                        <div style={{flex: "0 1 33%",textAlign: "left"}} classname="col">
                        <br></br><br></br>
                            <div style={{position: "relative", left: "30%"}} classname="list1">
                                <p style={{fontFamily: "Euclid Circular B", fontSize: "28px", fontStyle: "normal", lineHeight: "120%", fontWeight: "600", position: "relative", color: "#001826"}}>1. Find a fundraiser</p>
                                <p style={{fontFamily: "Euclid Circular B", fontSize: "18px", fontStyle: "normal", lineHeight: "135%", fontWeight: "400", position: "relative", color: "#0E161B"}}>Find a fundraiser that matches<br></br> with your organization's values</p>
                            </div>
                        </div>
                        <div style={{flex: "0 1 33%",textAlign: "left"}} classname="col">
                        <br></br><br></br>
                            <div style={{position: "relative", left: "30%"}} classname="list2">
                                <p style={{fontFamily: "Euclid Circular B", fontSize: "28px", fontStyle: "normal", lineHeight: "120%", fontWeight: "600", position: "relative", color: "#001826", lineWidth: "10%"}}>2. Agree on an amount</p>
                                <p style={{fontFamily: "Euclid Circular B", fontSize: "18px", fontStyle: "normal", lineHeight: "135%", fontWeight: "400", position: "relative", color: "#0E161B"}}>Come up with an amount that<br></br> you as an organization are<br></br> willing to donate</p>
                                <br></br><br></br><br></br><br></br><br></br>
                                <button style={{fontFamily: "Euclid Circular B", fontSize: "18px", fontStyle: "normal", lineHeight: "120%", fontWeight: "600",color: "#FFFFFF",border: "none",backgroundColor: "#709E9B", width: "176px", height: "56px", borderRadius: "8px", position: "relative", left: "8%"}}>Get started</button>
                                <br></br><br></br><br></br><br></br>
                            </div>
                    </div>
                        <div style={{flex: "0 1 33%",textAlign: "left"}} classname="col">
                        <br></br><br></br>
                            <div style={{position: "relative", left: "30%"}} classname="list3">
                                <p style={{fontFamily: "Euclid Circular B", fontSize: "28px", fontStyle: "normal", lineHeight: "120%", fontWeight: "600", position: "relative", color: "#001826"}}>3. Donate</p>
                                <p style={{fontFamily: "Euclid Circular B", fontSize: "18px", fontStyle: "normal", lineHeight: "135%", fontWeight: "400", position: "relative", color: "#0E161B"}}>Thank you for donating!<br></br><br></br> Visit the exploration page to find<br></br> other fundraisers and read<br></br> about other organizations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default HowMelioraImpactWorks;