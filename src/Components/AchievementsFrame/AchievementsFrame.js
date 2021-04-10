import React from 'react'
import './Achievements.scss'

export const AchievementsFrame = () => {
    return (
        <div>
             <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",padding:"50px"}}>
            
            <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>Achievements</p>
            <br/>
            <br/>
            <br/>
            <div class="container">
  
                <div class="layout" style={{margin: "auto"}}>
                    <p class="col col-main">
                    <strong>Olympiads</strong><br/> 
                    <ul>
                        <li>2018 RMO : Regional Mathematics Olympiad (Stage 2) :<br/> Qualified State Rank 6</li>
                        <li>2018 NSTSE : National State Talent Search Examination :<br/> Qualified State Rank 2</li>
                        <li>2019 NSTSE : National State Talent Search Examination :<br/> Qualified State Rank 3</li>
                    </ul>

                    </p>
                    <p class="col col-complementary" role="complementary">
                    <strong>Competitive Programming</strong><br/> 
                    <ul>
                        <br/>
                        <li>CodeForces : Rating 1627 : Expert</li>
                        <br/>
                        <li>CodeChef : Rating 1991 : 4 Star</li>
                    </ul>
                    </p>  
                </div>   
           </div>



            </div>
        </div>
    )
}
