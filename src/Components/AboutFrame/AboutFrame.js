import React from 'react'
import './AboutFrame.scss'

export const AboutFrame = () => {
    return (<>
        <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",background: "white"}}>
            
            <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>About Me</p>

            <div style={{width: "70%",margin: "auto",color: "#74808A"}}>
                <p>Hello, I am <strong>Prerit Kumar Jha</strong>, an undergraduate student, currently in my second year, pursuing 
                B.Tech in Computer Science Engineering<strong>(CSE)</strong> at <strong>Indian Institute of Information Technology(IIIT), Pune.</strong></p>
                <p>
                Grounded and solution oriented CS student. Adept at motivating self and others. Passionate about new data structure,
                algorithm and mathematics.Proficient in web development and android development both.
                </p>
            </div>

        </div>
        </>
    )
}
