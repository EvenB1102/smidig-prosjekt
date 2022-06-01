import React from 'react'
import "../css/ContactPageStyle.css";

const ContactPage = () => {
    return (
        <div className="contactPageContainer">
            <div className="contactUsContainer">
                <div className="melioraLogoBG">
                    
                </div>
                <div className="contactTitleContainer">
                    <div className="contactUsTitle">
                        <hr></hr>
                        <h4>Contact Us</h4>
                    </div>
                    <div className="contactHeader">
                        <h1>We'd <span className="loveP">love</span> to hear from you</h1>
                        <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
                    </div>
                </div>
                <div className="contactInfo">
                    <div className="letsTalk contactInfoBox">
                        <h6>Let's talk!</h6>
                        <p>Email: contact@melioraipmact.com</p>
                        <hr></hr>
                    </div>
                    <div className="headOffice contactInfoBox">
                        <h6>Headoffice</h6>
                        <p>Oslogaten 8b - 0123</p>
                        <p>Oslo, Norway</p>
                    </div>
                    <div className="branchOffice contactInfoBox">
                        <h6>Branch Office</h6>
                        <p>178 Makkaroni Stk, Venice 34293 <br></br>Italy</p>
                    </div>
                    <div className="socialMedia contactInfoBox">
                        <p>FCEBOOK</p>
                        <p>TWTR</p>
                        <p>LNKDN</p>
                    </div>
                </div>
            </div>
            <div className="contactFormContainer">
                <form className="contactForm">
                    <div className="contactFormContent">
                        <div className="half">
                            <div className="item">
                                <label for="name">Name</label>
                                <input type="text" id="name"></input>
                            </div>
                            <div className="item">
                                <label for="email">Email</label>
                                <input type="text" id="email"></input>
                            </div>
                        </div>
                        <div className="full">
                            <div className="item">
                                <label for="companyname">Company Name</label>
                                <input type="text" id="companyName"></input>
                            </div>
                            <div className="item">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject"></input>
                            </div>
                            <label for="message">Message</label>
                            <textarea name="" id="message"></textarea>
                        </div>
                        <div className="action">
                            <input type="submit" value="Send message"></input>
                        </div>
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default ContactPage