import React from 'react'
import './SkillFrame.scss'

export const SkillFrame = () => {
    return (
        <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",background: "#f2f2f5",padding:"50px"}}>
            
        <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>Skills</p>
        <br/>
        <br/>
        <br/>
            <ul class="skills" style={{fontWeight: "bold"}}>
            <li class="skill" aria-label="advanced">Data Structure and Algorithm</li>
            <li class="skill" aria-label="advanced">MERN Stack Web Development</li>
            <li class="skill" aria-label="average">Android Development</li>
            <li class="skill" aria-label="l33tasuar">C/C++</li>　
            <li class="skill" aria-label="novice">Java</li>
            <li class="skill" aria-label="average">Python</li>
            </ul>
        <br/>
        </div>
    )
}
