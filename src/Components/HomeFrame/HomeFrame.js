import React from 'react'
import './HomeFrame.scss'
import TypeIt from "typeit-react";
import {Button} from 'react-bootstrap'
import {AiFillGithub,AiFillLinkedin,AiFillMail,AiFillDownCircle} from 'react-icons/ai'


export const HomeFrame = () => {
    return (
        <div className="all">
           
            <div className="navbar">
                <a href="/" className="item">About</a>
                <a href="/" className="item">Experiences</a>
                <a href="/" className="item">Education</a>
                <a href="/" className="item">Skills</a>
                <a href="/" className="item">Projects</a>
                <a href="/" className="item">Contact</a>
            </div>

            <header class='masthead'>
                <p class='masthead-intro'>Hi I'm</p>
                <h1 class='masthead-heading'>Prerit</h1>
                <p className="masthead-intro">
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
                <p className="masthead-intro">
                  <AiFillGithub  style={{fontSize: "30px",cursor: "pointer"}}/>
                  <AiFillLinkedin style={{marginLeft: "20px",marginRight: "20px",fontSize: "30px",cursor: "pointer"}}/>
                  <AiFillMail  style={{fontSize: "30px",cursor: "pointer"}}/>
                </p>
                
            </header>
            <br/>
            <p className="masthead-intro">
            <AiFillDownCircle style={{cursor: "pointer",fontSize: "35px"}}/>
            </p>
        </div>
    )
}
