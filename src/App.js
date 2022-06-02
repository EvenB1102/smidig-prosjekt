

import { ActionButton, NavButton } from "./Components/ButtonComponents";
import Footer from "./Components/Footer";
import "./App.css";
import HowMelioraImpactWorks from "./Components/HowMelioraImpactWorks";
import FaqPage from "./Components/FaqPage/FaqPage";


import CharityCard from "./Components/CharityCard";
import SmallCharityCard from "./Components/SmallCharityCard";
import icon from "./images/icon.jpeg"
import icon2 from "./images/bk.webp"
import ProfileHeaderComponent from "./Components/ProfileHeaderComponent";
import { SubscriptionPlan } from "./Components/SubscriptionPlan";
import ExplorationPage from "./pages/ExplorationPage";
import DonationPage from "./pages/DonationPage";



import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Explore from './Components/Pages/Explore';
import Resources from './Components/Pages/Resources';
import News from './Components/Pages/News';


import { ActionButton, NavButton } from "./Components/ButtonComponents";
import Footer from "./Components/Footer";
import "./App.css";
import HowMelioraImpactWorks from "./Components/HowMelioraImpactWorks";
import About from './Components/AboutPage/About.js'
import OrganizationHeaderComponent from "./Components/OrganizationHeaderComponent";
import { SubscriptionPage } from "./pages/SubscriptionPage";

import { Activity } from "./Components/Activity";





function App() {
  


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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home}/>
        <Route path={"/Explore"} element={<ExplorationPage />}/>
        <Route path={"/Donation"} element={<DonationPage />}/>
        <Route path={"/About"} element={<About />}/>
        <Route path={"/Organization"} element={<OrganizationHeaderComponent />}/>
        <Route path={"/Subscription"} element={<SubscriptionPage />}/>
        <Route path={"/Activity"} element={<Activity />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    
    
  );
}

export default App;









/* Charity Card Info */


//<CharityCard {...myElement}/> 

/* SubscriptionPlan
        <SubscriptionPlan {...monthlySubscriptionPlan}/>
        <SubscriptionPlan {...yearlySubscriptionPlan}/>
*/
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




