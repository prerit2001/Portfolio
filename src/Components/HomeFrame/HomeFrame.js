import React from 'react'
import './HomeFrame.scss'
import TypeIt from "typeit-react";
import {Button} from 'react-bootstrap'
import {AiFillGithub,AiFillLinkedin,AiFillMail,AiFillDownCircle} from 'react-icons/ai'


export const HomeFrame = () => {
    const [background, setmode] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#000" : "#f2f2f5");
    const [text, settext] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#fff" : "#217dbb");
    const [text2, settext2] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#000" : "#fff");
    return (
        <div className="all">
           
            <div className="navbar" style={{background: `${background}`,zIndex: "100"}}>
                <a href="/" className="item" style={{color: `${text}`}}>About</a>
                <a href="/" className="item" style={{color: `${text}`}}>Experiences</a>
                <a href="/" className="item" style={{color: `${text}`}}>Education</a>
                <a href="/" className="item" style={{color: `${text}`}}>Skills</a>
                <a href="/" className="item" style={{color: `${text}`}}>Projects</a>
                <a href="/" className="item" style={{color: `${text}`}}>Contact</a>
            </div>

            <header class='masthead'>
                <p class='masthead-intro' style={{color: `${text2}`}}>Hi I'm</p>
                <h1 class='masthead-heading' style={{color: `${text2}`}}>Prerit</h1>
                <p className="masthead-intro" style={{color: `${text2}`}}>
                    <TypeIt
                        options={{ loop: true,speed: -200 }}            
                        getBeforeInit={instance => {
                            instance
                            .type("Competitive Programmer")
                            .pause(1000)
                            .delete(22)
                            .pause(1000)
                            .type("MERN Stack Developer")
                            .pause(1000)
                            .delete(20)
                            .pause(1000)
                            .type("Android Developer")
                            .pause(1000)
                            return instance;
                        }}
                    />
                </p>
                <br/>
                <p className="masthead-intro">
                    <Button variant="outline-light" style={{borderRadius: "1%"}}>Download Resume</Button>
                </p>
                <p className="masthead-intro" style={{color: `${text2}`}}>
                  <AiFillGithub  style={{fontSize: "30px",cursor: "pointer"}}/>
                  <AiFillLinkedin style={{marginLeft: "20px",marginRight: "20px",fontSize: "30px",cursor: "pointer"}}/>
                  <AiFillMail  style={{fontSize: "30px",cursor: "pointer"}}/>
                </p>
                
            </header>
            <br/>
            <p className="masthead-intro" style={{color: `${text2}`}}>
            <AiFillDownCircle style={{cursor: "pointer",fontSize: "35px"}}/>
            </p>
        </div>
    )
}
