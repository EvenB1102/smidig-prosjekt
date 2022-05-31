
import CharityCard from "./Components/CharityCard";
import SmallCharityCard from "./Components/SmallCharityCard";
import icon from "./images/icon.jpeg"
import icon2 from "./images/bk.webp"
import ProfileHeaderComponent from "./Components/ProfileHeaderComponent";
import { SubscriptionPlan } from "./Components/SubscriptionPlan";
import ExplorationPage from "./pages/ExplorationPage";
import DonationPage from "./pages/DonationPage";



import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Explore from './Components/Pages/Explore';
import Resources from './Components/Pages/Resources';
import News from './Components/Pages/News';


import { ActionButton, NavButton } from "./Components/ButtonComponents";
import Footer from "./Components/Footer";
import "./App.css";
import HowMelioraImpactWorks from "./Components/HowMelioraImpactWorks";
import { ActionButton, NavButton } from "./Components/ButtonComponents";
import { BadgeCard } from "./Components/BadgeCard";
import ProfilePage from "./Screens/ProfilePage";
import AboutOrganization from "./Components/AboutOrganization";
import HowWeWork from "./Components/HowWeWork";
import OrganizationHeaderComponent from "./Components/OrganizationHeaderComponent"
import OrganizationProjects from "./Components/OrganizationProjects";
import WelcomeComponent from "./Components/WelcomeComponent";





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home}/>
        <Route path={"/Explore"} element={<ExplorationPage />}/>
        <Route path={"/Donation"} element={<DonationPage />}/>
        <Route path='/News' exact component={News}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    
    
  );


  const profileVolkswagen = {
    badges:[{
    color: "#fee296",
    badgetitle: "Insert Badge Title",
    backgroundColor: "rgb(255, 184, 0, 0.15)",
    text: "This is an example description of what the badge represent",
    badgedate: "12/07/21",
    badgegiver: "Red Cross"
  },
  {
  color: "#fee296",
  badgetitle: "Insert Badge Title",
  backgroundColor: "red",
  text: "This is an example description of what the badge represent",
  badgedate: "12/07/21",
  badgegiver: "Leger uten grenser"
  },
  {
    color: "cyan",
    badgetitle: "Insert Badge Title",
    backgroundColor: "blue",
    text: "This is an example description of what the badge represent",
    badgedate: "12/07/21",
    badgegiver: "Abba"
  },
  {
    color: "orange",
    badgetitle: "Insert Badge Title",
    backgroundColor: "green",
    text: "This is an example description of what the badge represent",
    badgedate: "12/07/21",
    badgegiver: "Lindsay Lohan"
  },
  ]
}

  return (
    <div>
      <WelcomeComponent></WelcomeComponent>
    </div>

    /**
    <div>
      <ProfilePage data={profileVolkswagen}></ProfilePage>
      <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
      
      </div>
  
    {/* <BadgeCard color={"#fee296"} badgetitle={"Insert Badge Title"}
    backgroundColor={"rgb(255, 184, 0, 0.15)"}
    text={"This is an example description of what the badge represent"} 
    badgedate={"12/07/21"} 
    badgegiver={"Red Cross"}>
    </BadgeCard>
    <BadgeCard color={"#fee296"} badgetitle={"Insert Badge Title"}
    backgroundColor={"rgb(255, 184, 0, 0.15)"}
    text={"This is an example description of what the badge represent"} 
    badgedate={"12/07/21"} 
    badgegiver={"Red Cross"}>
    </BadgeCard> }
    </div> 
    */
  );
}

export default App;


const myElement = {
  title: "Education 4All",
  description: "Our donation goal of building 10 more schools in Africa has been achieved. Meloria Impact are grateful for all...",
  daysleft: 11,
  completeness: 3,
  image: icon
};

const mySmallElement = { 
  title: "Building a water well in Kajone’n",
  description: "Kajone’n in West Africa needs a new water well for its inhabitants",
  moneygoal: 20000,
  moneyraised: 3500,
  image: icon2
};

const monthlySubscriptionPlan = {
  price: "10.49",
  duration: "Monthly",
  firstdot: "Access to every organisation", 
  seconddot: "Donation limit uncapped", 
  thirddot: "Donation statistics", 
  fourthdot: "Badges", 
  fifthdot: "Premium support"
}

const yearlySubscriptionPlan = {
  price: "89.99",
  duration: "Annually",
  firstdot: "Access to every organisation", 
  seconddot: "Donation limit uncapped", 
  thirddot: "Donation statistics", 
  fourthdot: "Badges", 
  fifthdot: "Premium support"
}

