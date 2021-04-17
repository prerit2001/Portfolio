import React from 'react'
import './HomeFrame.scss'
import TypeIt from "typeit-react";
import {Button} from 'react-bootstrap'
import {AiFillGithub,AiFillLinkedin,AiFillMail,AiFillDownCircle} from 'react-icons/ai'
import {VscThreeBars} from 'react-icons/vsc'
import {
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap'


export const HomeFrame = () => {
    const [background, setmode] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#000" : "#f2f2f5");
    const [text, settext] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#fff" : "#217dbb");
    const [text2, settext2] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#000" : "#fff");
    return (
        <div className="all">
           

            <>
            <Navbar expand="lg" style={{background: `${background}`,zIndex: "100"}}>
  <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: `${text}`}}><VscThreeBars/></Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link className="item" style={{background: `${background}`,color: `${text}`}} href="#home">About</Nav.Link>
      <Nav.Link className="item" style={{background: `${background}`,color: `${text}`}} href="#link">Experiences</Nav.Link>
      <Nav.Link className="item" style={{background: `${background}`,color: `${text}`}} href="#link">Education</Nav.Link>
      <Nav.Link className="item" style={{background: `${background}`,color: `${text}`}} href="#link">Skills</Nav.Link>
      <Nav.Link className="item" style={{background: `${background}`,color: `${text}`}} href="#link">Projects</Nav.Link>
      <Nav.Link className="item" style={{background: `${background}`,color: `${text}`}} href="#link">Contact</Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>

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
