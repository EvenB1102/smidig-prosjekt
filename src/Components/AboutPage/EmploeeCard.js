import React from 'react'

import twitter from "./AboutImages/Twitter.png"
import facebook from "./AboutImages/Facebook-f.png"
import linkedIn from "./AboutImages/LinkedIn.png"
import "../AboutPage/AboutCSS/About.css"
import EmploeeDatas from './EmploeeData.json'
import './AboutCSS/EmploeeCard.css'



const EmploeeCard = () => {
  return (
    <div className='body'>


    

        <div className='wrapper'>
            {
                EmploeeDatas && EmploeeDatas.map( EmploeeData => {
                    return(
                        <div className='emploeeCard' key={ EmploeeData.id }>
                            <div>
                            <img src={ EmploeeData.image } alt='no pic'/>
                            </div>
                            <div style={{color: "#709E9B", fontWeight: "bold", fontSize: "1.5rem"  }}>{ EmploeeData.title }</div>
                            <div>{ EmploeeData.name }</div>
                            <div style={{padding: "0rem 2rem"}}>{ EmploeeData.describtion }</div>
                            <div className='social-logo'>
                            <div>
                                <img src={twitter} alt=""/>
                            </div>
                            <div>
                                <img src={facebook} alt=""/>
                            </div>
                            <div>
                                <img src={linkedIn} alt=""/>
                            </div>
                            </div>
                        </div>  
                        

                    )
                } )
                
            }    
            <div>
                <img src="./AboutImages/Twitter.png" alt=""/>
            </div>
            
        </div>    

    </div>
    
  )
}

export default EmploeeCard