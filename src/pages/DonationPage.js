
import { SmallCharityCard20, SmallCharityCard45, SmallCharityCardComplete } from "../Components/CharityCards/SmallCharityCard";
import icon from "../images/icon.jpeg"


function DonationPage() {
    return(
        
        <body style={{paddingLeft: 100}} >


            <h1 style={{marginTop: 70}}>Children in Myanmar need education</h1>
        
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
        <img src={require("../images/image.png")} style={{width: "743px"}}/>
        <img src={require("../images/Donate.png")} style={{width: "422px"}}/>
        </div>
        <div style={{width: 743, display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
        <p>Only 64% of children in Myanmar aged 5-17 years are attending school, leaving over one million children out of school. In addition, improving the quality of education is critical as it is still one of the causes for children to drop out from school.</p>
        <h3>Project created by <a href="/Organization">Red Cross</a></h3>
        </div>



        <div class="fundraisers" style={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 230, overflow: "hidden"}}>
            {ongoingFundraisers()}
            <img src={require("../images/Ellipse.png")} style={{position: "absolute", zIndex: "-1", top: 780, left: -700}}/>

            {completedFundraisers()}

            {recommendedFundraisers()}
        </div>


        </body>
    )
}

export default DonationPage;

const myElement = {
    title: "Education 4All",
    description: "Our donation goal of building 10 more schools in Africa has been achieved. Meloria Impact are grateful for all...",
    moneyraised: "30.000",
    moneygoal: "55.000",
    completeness: 3,
    image: icon
  };

  export const DonationStyles = {
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

function recommendedFundraisers() {
    return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 1000 }}>
        <h1 style={{ padding: 0, margin: 0 }}>Recommended fundraisers</h1>
        <div style={{ display: "flex", flex: 4, flexWrap: "wrap", justifyContent: "flex-start", width: 2000 }}>
            <SmallCharityCard20 {...myElement} />
            <SmallCharityCard45 {...myElement} />
            <a href="/Explore" style={{textDecoration: "none"}}><p style={DonationStyles.seemore}>See more</p></a>
        </div>
    </div>;
}

function completedFundraisers() {
    return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 1000 }}>
        <h1 style={{ padding: 0, margin: 0 }}>Completed Fundraisers</h1>
        <div style={{ display: "flex", flex: 4, flexWrap: "wrap", justifyContent: "flex-start", width: 2000 }}>
            <SmallCharityCardComplete {...myElement} />
            <SmallCharityCardComplete {...myElement} />
            <a href="/Explore" style={{textDecoration: "none"}}><p style={DonationStyles.seemore}>See more</p></a>
        </div>
    </div>;
}

function ongoingFundraisers() {
    return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 1000 }}>
        <h1 style={{ padding: 0, margin: 0 }}>Ongoing Fundraisers</h1>
        <div style={{ display: "flex", flex: 4, flexWrap: "wrap", justifyContent: "flex-start", width: 2000 }}>
            <SmallCharityCard20 {...myElement} />
            <SmallCharityCard45 {...myElement} />
            <a href="/Explore" style={{textDecoration: "none"}}><p style={DonationStyles.seemore}>See more</p></a>
        </div>
    </div>;
}
