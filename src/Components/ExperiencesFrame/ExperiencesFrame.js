import React from 'react'
import './ExperiencesFrame.scss'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {Button} from 'react-bootstrap'

export const ExperiencesFrame = () => {
    return (
        <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",background: "#f2f2f5",padding:"50px"}}>
            
        <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>Experience</p>
        <br/>
        <br/>
        <br/>
        <div className="box1" style={{width: "50%",marginLeft: "auto",marginRight: "auto",color: "#74808A",minWidth: "400px"}}>
            <div>

            <div style={{width: "20%",float:"left"}}>
            <img src="https://contact.iiitiansnetwork.com/img/logo/logo.png" width="90%" height="100px"/>
            </div>

            <div style={{width: "80%",float:"right"}}>
            <h4 style={{color : "#000"}}><strong>IIITians Network</strong></h4>
            <h5 style={{color : "#000",fontSize: "20px"}}>MERN Stack Backend Developer</h5>
            </div>
            </div>
            
            <ul>
            <div  style={{fontSize: "20px",color: "#217DBB"}}>
                <AiOutlineFieldTime/>
                 2nd year Onwards
                 <br/> 
            </div>
                <br/>
                <li>Open Source.</li>
                <li>Major Contributions in the Project Messaging Plugin Backend.</li>
                <li>Worked with AWS DynamoDB.</li>
                <li>Working with Team Delta on Mern Backend, Socket Io and Management.</li>
                <li>Experience on team work and management with github.</li>
                <li>Promoted to Core Member.</li>
            </ul>
            <p className="masthead-intro">
                <Button variant="outline-primary" style={{borderRadius: "1%",fontFamily: "monospace"}}>Know More →</Button>
            </p>
            {/* <Button variant="outline-primary" style={{margin: "auto"}}></Button> */}
        </div>
        <br/>

    </div>
    )
}
