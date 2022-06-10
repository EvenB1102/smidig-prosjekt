import ProfileHeader from "../Components/ProfileHeader"
import { Activity } from "./Activity"
import BadgePage from "./BadgesPage/BadgePage"


export const ProfilePageBadges = () => {
    return (
      <div>
  
        <ProfileHeader />
        
        <div  style={{display: "flex", justifyContent: "center"}}>
            <BadgePage />
        </div>

          
          
          
      </div>
    )
  }