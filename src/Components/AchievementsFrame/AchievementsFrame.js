import React from 'react'
import './Achievements.scss'

export const AchievementsFrame = () => {
    const [background, setmode] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#000" : "#f2f2f5");
    const [text, settext] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#fff" : "#374054");
    return (
        <div>
             <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",padding:"50px"}}>
            
            <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>Achievements</p>
            <br/>
            <br/>
            <br/>
            <div class="container" style={{background: ""}}>
  
                <div class="layout" style={{margin: "auto"}}>
                    <p class="col col-main" style={{background: `${background}`,color: `${text}`}}>
                    <strong><u>Olympiads</u></strong><br/> <br/>
                    <ul>
                        <li>2018 RMO : Regional Mathematics Olympiad (Stage 2) :<br/> Qualified State Rank 6</li>
                        <li>2018 NSTSE : National State Talent Search Examination :<br/> Qualified State Rank 2</li>
                        <li>2019 NSTSE : National State Talent Search Examination :<br/> Qualified State Rank 3</li>
                    </ul>

                    </p>
                    <p class="col col-complementary" role="complementary" style={{background: `${background}`,color: `${text}`}}>
                    <strong><u>Competitive Programming</u></strong><br/> 
                    <ul>
                        <br/>
                        <li ><b>CodeForces</b> :<strong style={{color:"orange"}}> Rating 1639 : Expert</strong> : <i>[ @prerit2001 ]</i> </li>
                        <li ><b>CodeChef</b> :<strong style={{color:"orange"}}> Rating 2063 : 5 Star</strong> : <i>[ @legend_op</i> ]</li> 
                        <li ><b>LeetCode</b> : <strong style={{color:"orange"}}>Rating 1841 :</strong> <i>[ @legend_op ]</i> </li>
                    </ul>
                    </p>  
                </div>   
           </div>



            </div>
        </div>
    )
}
