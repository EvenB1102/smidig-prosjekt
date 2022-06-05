import Footer from "./Components/Footer";

import FaqPage from "./Components/FaqPage/FaqPage";
import SettingsPage from "./Components/SettingPage/SettingsPage.js"

import ContactPage from "./Components/ContactPage";


import ExplorationPage from "./pages/ExplorationPage";
import DonationPage from "./pages/DonationPage";




import Navbar from './Components/Navbar/Navbar.js';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';


import About from './Components/AboutPage/About.js'
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
        <Route path={"/Subscription"} element={<SubscriptionPage />}/>
        <Route path={"/Organization"} element={<OrganizationPage />}/>
        <Route path={"/Activity"} element={<Activity />}/>
        <Route path={"/Settings"} element={<SettingsPage />}/>
        <Route path={"/FAQ"} element={<FaqPage />}/>
        <Route path={"/Contact"} element={<ContactPage />}/> 
      </Routes>
      <Footer />
    </BrowserRouter>
    
    
    );
  }
  
  export default App;
  
