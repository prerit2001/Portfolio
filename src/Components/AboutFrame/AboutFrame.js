import React from 'react'
import './AboutFrame.scss'

export const AboutFrame = () => {
    const [background, setmode] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#000" : "#f2f2f5");
    const [text, settext] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#fff" : "#374054");
    const [border, setborder] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "gray" : "#fff");
    return (<>
        <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",background: "white",padding:"50px"}}>
            
            <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>About Me</p>
            <br/>
            <br/>
            <br/>
            <div className="aboutf" style={{margin: "auto",color: "#74808A"}}>
                <p>Hello, I am <strong>Prerit Kumar Jha</strong>, an undergraduate student, currently in my second year, pursuing 
                B.Tech in Computer Science Engineering<strong>(CSE)</strong> at <strong>Indian Institute of Information Technology(IIIT), Pune.</strong></p>
                <p>
                Grounded and solution oriented CS student. Adept at motivating self and others. Passionate about new data structure,
                algorithm and mathematics.Proficient in web development and android development both.
                </p>
                <div class="ro" style={{border: `4px solid ${border}`}}>
                    <div class="colum" style={{background: `${background}`,color: `${text}`,border: `4px solid ${border}`}}>
                    <p><b style={{fontSize: "1.5rem"}}>CodeForces</b><br/>
                        <b style={{color: "orange"}}>Rated 1639<br/>
                        Expert</b></p>
                    </div>
                    <div class="colum" style={{background: `${background}`,color: `${text}`,border: `4px solid ${border}`}}>
                    <p><b style={{fontSize: "1.5rem"}}>CodeChef</b><br/>
                    <b style={{color: "orange"}}>Rated 2063<br/>
                        5 Star</b></p>
                    </div>
                    <div class="colum" style={{background: `${background}`,color: `${text}`,border: `4px solid ${border}`}}>
                    <p><b style={{fontSize: "1.5rem"}}>LeetCode</b><br/>
                    <b style={{color: "orange"}}>Rated 1841<br/>
                        -</b></p>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
