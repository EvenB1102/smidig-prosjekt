import React from 'react'
import AboutUs from '../AboutUs'
import HowWeWork from '../HowWeWork'
import OrganizationHeaderComponent from '../OrganizationHeaderComponent'
//import organizationCards  from '../../pages/DonationPage'
import SmallCharityCardComplete, { SmallCharityCard20, SmallCharityCard45 } from '../SmallCharityCard'
import icon from "../../images/icon.jpeg"



const OrganizationPage = () => {
  return (
    <div>

<OrganizationHeaderComponent/>
<AboutUs/>
<HowWeWork/>

  <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <div class="fundraisers" style={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 130}}>
              {ongoingFundraisers()}
              <img src={require("../../images/Ellipse.png")} style={{position: "absolute", zIndex: "-1", top: 780, left: -700}}/>

              {completedFundraisers()}
          </div>
          </div>
        
        
        
    </div>
  )
}

export default OrganizationPage;

function recommendedFundraisers() {
  return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 1000 }}>
      <h1 style={{ padding: 0, margin: 0 }}>Recommended fundraisers</h1>
      <div style={{ display: "flex", flex: 4, flexWrap: "wrap", justifyContent: "flex-start", width: 2000 }}>
          <SmallCharityCard20 {...myElement} />
          <SmallCharityCard45 {...myElement} />
          <p style={DonationStyles.seemore}>See more</p>
      </div>
  </div>;
}

function completedFundraisers() {
  return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 1000 }}>
      <h1 style={{ padding: 0, margin: 0 }}>Completed Fundraisers</h1>
      <div style={{ display: "flex", flex: 4, flexWrap: "wrap", justifyContent: "flex-start", width: 2000 }}>
          <SmallCharityCardComplete {...myElement} />
          <SmallCharityCardComplete {...myElement} />
          <p style={DonationStyles.seemore}>See more</p>
      </div>
  </div>;
}

function ongoingFundraisers() {
  return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 1000 }}>
      <h1 style={{ padding: 0, margin: 0 }}>Ongoing Fundraisers</h1>
      <div style={{ display: "flex", flex: 4, flexWrap: "wrap", justifyContent: "flex-start", width: 2000 }}>
          <SmallCharityCard20 {...myElement} />
          <SmallCharityCard45 {...myElement} />
          <p style={DonationStyles.seemore}>See more</p>
      </div>
  </div>;
}

const myElement = {
  title: "Education 4All",
  description: "Our donation goal of building 10 more schools in Africa has been achieved. Meloria Impact are grateful for all...",
  moneyraised: "30.000",
  moneygoal: "55.000",
  completeness: 3,
  image: icon
};

const DonationStyles = {
  seemore: {
    width: "73px",
    height:" 19px",
    
    fontFamily: 'Euclid Circular B',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 15,
    lineHeight: "19px",
    marginTop: 110,
    
    textAlign: "center",
    
    color: "#709E9B",
    
    
    /* Inside auto layout */
    
    flex: "none",
    order: 2,
    flexGrow: 0
  }
}