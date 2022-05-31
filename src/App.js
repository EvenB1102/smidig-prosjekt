
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

