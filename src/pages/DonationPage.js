import CharityCard from "../Components/CharityCard";
import SmallCharityCard, { SmallCharityCard20, SmallCharityCard45, SmallCharityCard70, SmallCharityCard90, SmallCharityCardComplete } from "../Components/SmallCharityCard";
import icon from "../images/icon.jpeg"


function DonationPage() {
    return(
        
        <body style={{backgroundColor: "#f7f7f7"}}>

            <h1>Children in Myanmar need education</h1>
        
        <div style={{display: "flex", justifyContent: "center"}}>
            <div>One</div>
            <div>Two</div>
        </div>

        <div style={{display: "flex", justifyContent: "center"}}>

            <div style={{display: "flex", flex: 4, flexWrap: "wrap", justifyContent: "center"}}>
                <SmallCharityCard20 {...myElement}/>
                <SmallCharityCard45 {...myElement}/>
                <SmallCharityCard70 {...myElement}/>
                <SmallCharityCard90 {...myElement}/>
                <SmallCharityCardComplete {...myElement} />
            </div>
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