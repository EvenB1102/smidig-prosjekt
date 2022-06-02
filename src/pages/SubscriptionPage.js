import { SubscriptionPlan } from "../Components/SubscriptionPlan";

export function SubscriptionPage() {
    return(
        <body>
            <h1 style={{display: "flex", justifyContent: "center", paddingTop: 50}}>Choose the plan that's right for you!</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <SubscriptionPlan {...monthlySubscriptionPlan}/>
                <SubscriptionPlan {...yearlySubscriptionPlan}/>
            <div style={{position: "absolute", top: 400, width: 2000, display: "flex", justifyContent: "center", zIndex: -2}}>
            <img src={require("../images/Background.png")} style={{width: 2000}}/>
            </div>
            </div>
            <p style={{display: "flex", justifyContent: "center", fontSize: 18, paddingBottom: 130}}>If you have any questions, you can either  <u style={{paddingLeft: 5, paddingRight: 5}}> contact us </u>  or we might have your answer on <u style={{paddingLeft: 5}}>frequently asked questions.</u></p>


        </body>
    )
}

const monthlySubscriptionPlan = {
    price: "10.49",
    duration: "Monthly",
    firstdot: "Access to every organization", 
    seconddot: "Donation limit uncapped", 
    thirddot: "Donation statistics", 
    fourthdot: "Badges", 
    fifthdot: "Premium support"
  }
  
  const yearlySubscriptionPlan = {
    price: "89.99",
    duration: "Annually",
    firstdot: "Access to every organization", 
    seconddot: "Donation limit uncapped", 
    thirddot: "Donation statistics", 
    fourthdot: "Badges", 
    fifthdot: "Premium support"
  }