import React from 'react'
import AboutUs from '../AboutUs'
import HowWeWork from '../HowWeWork'
import OrganizationHeaderComponent from '../OrganizationHeaderComponent'
//import organizationCards  from '../../pages/DonationPage'
import SmallCharityCardComplete, { SmallCharityCard20, SmallCharityCard45 } from '../../Components/CharityCards/SmallCharityCard'
import icon from "../../images/icon.jpeg"
import CharityCard from '../../Components/CharityCards/CharityCard'
import icon2 from "../../images/bk.webp"




const OrganizationPage = () => {
  return (
    <div>
        <OrganizationHeaderComponent />

<div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "1120px"}}>
            <div style={{display: "flex", flex: 4, flexWrap: "wrap", justifyContent: "center"}}>
                <CharityCard {...myElement}/>
                <CharityCard {...myElement}/>
                <CharityCard {...myNewElement}/>
                <CharityCard {...myNewElement}/>
                <CharityCard {...myNewElement}/>
                <CharityCard {...myNewElement}/>
              </div>
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

const myNewElement = {
    title: "EAll",
    description: "Our dschools in Africa has be Impact are grateful for all...",
    daysleft: 15,
    completeness: 7,
    image: icon2
  }

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