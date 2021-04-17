import React from 'react'
import './SkillFrame.scss'

export const SkillFrame = () => {
    const [background, setmode] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#000" : "#f2f2f5");
    const [text, settext] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#fff" : "#374054");
    return (
        <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",background: `${background}`,padding:"50px"}}>
            
        <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:`${text}`}}>Skills</p>
        <br/>
        <br/>
        <br/>
            <ul class="skills" style={{fontWeight: "bold",color:`${text}`}}>
            <li class="skill" aria-label="l33tasuar">Data Structure</li>
            <li class="skill" aria-label="l33tasuar">Algorithm</li>
            <li class="skill" aria-label="advanced">MERN Web Dev</li>
            <li class="skill" aria-label="average">Android Development</li>
            <li class="skill" aria-label="l33tasuar">C/C++</li>
            <li class="skill" aria-label="novice">Java</li>
            <li class="skill" aria-label="average">Python</li>
            </ul>
        <br/>
        </div>
    )
}
