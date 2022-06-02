import React from 'react'
import { ActionButton } from './ButtonComponents'
import '../css/WelcomeStyle.css'

const WelcomeComponent = () => {
    return (
        <div className="welcomeComponent">
            <div className="welcomeHeaderImage">
                <img src={require('../images/melioraHeader.jpg')} alt="headerImage"></img>
            </div>
            <div className="welcomeContentContainer">
                <div className="welcomeContent">
                    <h1 className="welcomeTitle">Welcome to Meliora Impact</h1>
                    <div className="welcomeContentWrapper">
                        <div className="welcomeText">
                            <h3>Who are we?</h3>
                            <p>
                                We're a Norwegian female-founded startup changing corporate giving and the way companies and nonprofits connect. We're saving companies resources, help create stable income streams for nonprofits, and create deeper relationships between donor and nonprofit. We help implement solid strategies for impactful and sustainable giving, all in line with the UN SDGs.
                            </p>
                        </div>
                        <div className="welcomeText">
                            <h3>Call to action</h3>
                            <p>
                                We are currently in the start up phase of our venture and are looking for co-creators, connect with us if you're a business interested in impactful giving, or a nonprofit that works in line with the SDGs!
                            </p>
                        </div>
                        <div className="buttonContainer">
                            <ActionButton text={'Read more about us'}></ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default WelcomeComponent