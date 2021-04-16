import React from 'react'
import './AboutFrame.scss'

export const AboutFrame = () => {
    return (<>
        <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",background: "white",padding:"50px"}}>
            
            <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>About Me</p>
            <br/>
            <br/>
            <br/>
            <div style={{width: "70%",margin: "auto",color: "#74808A"}}>
                <p>Hello, I am <strong>Prerit Kumar Jha</strong>, an undergraduate student, currently in my second year, pursuing 
                B.Tech in Computer Science Engineering<strong>(CSE)</strong> at <strong>Indian Institute of Information Technology(IIIT), Pune.</strong></p>
                <p>
                Grounded and solution oriented CS student. Adept at motivating self and others. Passionate about new data structure,
                algorithm and mathematics.Proficient in web development and android development both.
                </p>
                <div class="ro">
                    <div class="colum" style={{backgroundColor:"#f2f2f5"}}>
                    <p><b style={{fontSize: "1.5rem",color: "#000"}}>CodeForces</b><br/>
                        <b style={{color: "blue"}}>Rated 1639<br/>
                        Expert</b></p>
                    </div>
                    <div class="colum" style={{backgroundColor:"#f2f2f5"}}>
                    <p><b style={{fontSize: "1.5rem",color: "#000"}}>CodeChef</b><br/>
                    <b style={{color: "orange"}}>Rated 2063<br/>
                        5 Star</b></p>
                    </div>
                    <div class="colum" style={{backgroundColor:"#f2f2f5"}}>
                    <p><b style={{fontSize: "1.5rem",color: "#000"}}>LeetCode</b><br/>
                    <b style={{color: "brown"}}>Rated 1841<br/>
                        -</b></p>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
