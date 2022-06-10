import ProfileHeader from "../Components/ProfileHeader"
import { Activity } from "./Activity"


export const ProfilePage = () => {
    return (
      <div>
  
        <ProfileHeader />
        
        <div  style={{display: "flex", justifyContent: "center"}}>
        <Activity />
        </div>

          
          
          
      </div>
    )
  }