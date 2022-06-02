import { ActionButton, NavButton } from "./Components/ButtonComponents";
import Footer from "./Components/Footer";
import "./App.css";
import HowMelioraImpactWorks from "./Components/HowMelioraImpactWorks";
import FaqPage from "./Components/FaqPage/FaqPage";
import SettingsPage from "./Components/SettingPage/SettingsPage.js"


import CharityCard from "./Components/CharityCard";
import SmallCharityCard from "./Components/SmallCharityCard";
import icon from "./images/icon.jpeg"
import icon2 from "./images/bk.webp"
import ProfileHeaderComponent from "./Components/ProfileHeaderComponent";
import { SubscriptionPlan } from "./Components/SubscriptionPlan";
import ExplorationPage from "./pages/ExplorationPage";
import DonationPage from "./pages/DonationPage";

import { ActionButton, NavButton } from "./Components/ButtonComponents";
import Footer from "./Components/Footer";
import "./App.css";
import HowMelioraImpactWorks from "./Components/HowMelioraImpactWorks";






import History from "./Components/History";

import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Explore from './Components/Pages/Explore';
import Resources from './Components/Pages/Resources';
import News from './Components/Pages/News';




import About from './Components/AboutPage/About.js'
import OrganizationHeaderComponent from "./Components/OrganizationHeaderComponent";
import { SubscriptionPage } from "./pages/SubscriptionPage";

import { Activity } from "./Components/Activity";


import LandingPage from "./Components/LandingPage/LandingPage";
import OrganizationPage from "./Components/OrganizationPage/OrganizationPage.js";




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
        <Route path='/' exact element={<LandingPage />}/>
        <Route path={"/Explore"} element={<ExplorationPage />}/>
        <Route path={"/Donation"} element={<DonationPage />}/>
        <Route path={"/About"} element={<About />}/>
        <Route path={"../OrganizationPage/Organization"} element={<OrganizationPage />}/>
        <Route path={"/Subscription"} element={<SubscriptionPage />}/>
        <Route path={"/Activity"} element={<Activity />}/>
        <Route path={"/Settings"} element={<SettingsPage />}/>
        <Route path={"/FAQ"} element={<FaqPage />}/>
      
      </Routes>
      <Footer />
    </BrowserRouter>
    
    
  );
}

export default App;

function App() {
  

  return (
    <div className="page-container">
    <div className="content-wrap">

    </div>
    <HowMelioraImpactWorks/>
    <Footer/>
    </div>
  );
}

export default App;
