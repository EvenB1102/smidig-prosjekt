import React from 'react'
import { NavButton } from './ButtonComponents'
import window1 from '../images/window1.png'
import FacebookLogo from '../images/FacebookLogo.png'
import InstaLogo from '../images/InstaLogo.png'
import TwitterLogo from '../images/TwitterLogo.png'
import OrganizationHeaderStyle from "../css/OrganizationHeaderStyle.css"

const OrganizationHeaderComponent = () => {
    return (
        <div className="organizationContainer" style={{paddingBottom: 150}}>
            <div className="headerImage">
                <img src={require('../images/volkswa.png')} alt="headerImage"></img>
            </div>
            <div className="profileContentContainer">
                <div className="profileContent">
                    <div className="profileDetails">
                        <div className="organizationName">
                        <img src={require('../images/volklogo.png')} alt="headerImage" style={{position: "absolute", marginLeft: -5, top: 230}}></img> 
                                <h6>Volkswagen</h6>
                        </div>
                        <div className="socialsContainer" style={{display: 'flex', justifyContent: "center", lineHeight: "2", color: "#709E9B"}}>
                            <h3 style={{margin: 0, padding: 0, fontSize: 11}}>www.volkswagen.com</h3>
                        </div>
                    </div>
                    <div className="profileDescription">
                        <div className="profileDescriptionText">
                            <p>World famous car manufacturer from Germany.
Welcome to our official page for donations.</p>
                        </div>
                        <div className="statsBar">
                            <div>
                                <p className="statsNumber">17</p>
                                <p className="statsTitle">Donations</p>
                            </div>
                            <div className="statsDivider"></div>
                            <div>
                                <p className="statsNumber">4</p>
                                <p className="statsTitle">Badges</p>
                            </div>
                            <div className="statsDivider"></div>
                            <div>
                                <p className="statsNumber">$3,4m</p>
                                <p className="statsTitle">Total donations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="organizationHeaderBottom" >
                <div className="organizationButtons" style={{paddingTop: 100}}>
                    <a href="/profile"><NavButton text={"Activity"} border={"solid #709E9B 3px"}></NavButton></a>
                    <a href="/profilepagebadges"><NavButton text={"Badges"} border={"solid #709E9B 3px"}></NavButton></a>
                    <hr style={{width: "100%"}}></hr>
                </div>
            </div>
        </div>
    )
}



export default OrganizationHeaderComponent