import React from 'react'
import { NavButton } from './ButtonComponents'
import OrganizationHeaderStyle from "../css/OrganizationHeaderStyle.css"

const OrganizationHeaderComponent = () => {
    return (
        <div className="organizationContainer">
            <div className="headerImage">
                <img src={require('../images/reddcross.jpg')} alt="headerImage"></img>
            </div>
            <div className="profileContentContainer">
                <div className="profileContent">
                    <div className="profileDetails">
                        <div className="organizationName">
                                <h6>Redd Cross</h6>
                        </div>
                        <div className="socialsContainer">
                            <img src="" alt="W"></img>
                            <div className="statsDivider"></div>
                            <img src="" alt="F"></img>
                            <div className="statsDivider"></div>
                            <img src="" alt="I"></img>
                            <div className="statsDivider"></div>
                            <img src="" alt="T"></img>
                        </div>
                    </div>
                    <div className="profileDescription">
                        <div className="profileDescriptionText">
                            <p>The Norwegian Red Cross mission is to reveal, prevent and alleviate human suffering and distress. Our activities are grounded in local needs, resources and competencies, carried out by local volunteers.</p>
                        </div>
                        <div className="statsBar">
                            <div>
                                <p className="statsNumber">11</p>
                                <p className="statsTitle">Donations</p>
                            </div>
                            <div className="statsDivider"></div>
                            <div>
                                <p className="statsNumber">6</p>
                                <p className="statsTitle">Ongoing Projects</p>
                            </div>
                            <div className="statsDivider"></div>
                            <div>
                                <p className="statsNumber">$65m</p>
                                <p className="statsTitle">Total donations</p>
                            </div>
                            <div className="statsDivider"></div>
                            <div>
                                <p className="statsNumber">$200</p>
                                <p className="statsTitle">Goal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="organizationHeaderBottom">
                <div className="organizationButtons">
                    <NavButton text={"About"}></NavButton>
                    <NavButton text={"Projects"}></NavButton>
                </div>
            </div>
            <div className="sectionDivider">
                    <hr></hr>
                </div>
        </div>
    )
}



export default OrganizationHeaderComponent