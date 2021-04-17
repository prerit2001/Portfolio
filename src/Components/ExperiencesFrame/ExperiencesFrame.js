import React from 'react'
import './ExperiencesFrame.scss'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {Button} from 'react-bootstrap'

export const ExperiencesFrame = () => {


    const [background, setmode] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#000" : "#f2f2f5");
    const [text, settext] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#fff" : "#374054");

    return (<div>
        <div className="OKK" style={{margin: "auto",textAlign: "center",fontFamily: "'Lato', sans-serif",background: `${background}`,padding:"10px"}}>
            
        <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:`${text}`}}>Experience</p>
        <br/>
        <br/>
        <br/>
        <div style={{margin: "auto"}}>
        <div style={{margin: "auto"}}>    
            <div class="card2">
                <br/>
                    <h5 class="mb-1">
                    IIITians Network
                    </h5>

                    <h6 class="font-weight-bolder">
                    MERN Stack Backend Developer
                    <span class="font-weight-light"
                        >&nbsp;|&nbsp;Dec 2019 &ndash; Present
                    </span>
                    </h6>       
                        <li>Open Source.</li>
                        <li>Major Contributions in the Project Messaging Plugin Backend.</li>
                        <li>Worked with AWS DynamoDB.</li>
                        <li>Working with Team Delta on Mern Backend, Socket Io and Management.</li>
                        <li>Experience on team work and management with github.</li>
                        <li>Promoted to Core Member.</li>
                  
            
                <br/>
            </div>
        </div>
        </div>




        {/* <div className="box1" style={{width: "50%",marginLeft: "auto",marginRight: "auto",color: "#74808A",minWidth: "400px"}}>
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
        </div> */}
        <br/>
        </div>
    
    </div>
    )
}
