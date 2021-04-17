import React from 'react'
import './ContactFrame.scss'
import {Button} from 'react-bootstrap'
import {GrFormLocation,GrResume} from 'react-icons/gr'
import {AiFillPhone,AiFillMail,AiFillLinkedin,AiFillGithub,} from 'react-icons/ai'


export const ContactFrame = () => {
    const [background, setmode] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#000" : "#f2f2f5");
    const [text, settext] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "#fff" : "#374054");
    const [border, setborder] = React.useState(sessionStorage.getItem("Mode")=="Dark" ? "gray" : "#fff");

    return (
        <div style={{textAlign: "center",marginTop: "40px",marginBottom: "40px"}}>


        <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>Contact</p>


        <div class="roww" style={{margin: "auto"}}>
            <div class="colummm" style={{background: "white",transform: "translate(-8px,0)"}}>
            <div class="text-center my-wrap pt-5 pb-5">
            <div class="custom-form" >
                <div class="custom-form-label">
                    <label for="userid">Email Address</label>
                </div>
                <input type="text" name="userid" class="custom-form-control" placeholder="" required="" />
            </div>
            <div class="custom-form">
                <div class="custom-form-label">
                    <label for="subject">Subject</label>
                </div>
                <input type="subject" name="Subject" class="custom-form-control" placeholder="" required="" />
            </div>
            <div class="custom-form"> 
                <div class="custom-form-label">
                    <label for="password">Message</label>
                </div>
                <textarea rows="6" name="message" class="custom-form-control" placeholder="" required="" />
            </div>
            <Button variant="primary" style={{background : "#217dbb"}}>SEND MAIL</Button>{' '}
            </div>
            </div>
            <div class="colummm" style={{fontSize: "1.5rem"}}>
            <br/><br/><br/>
            <strong>PRERIT KUMAR JHA</strong><br/>
            A CP-DEV Geek from IIIT Pune  
            <hr/>
                <p style={{textAlign: "center"}}>
                <AiFillPhone/> (+91) 9110939089 <br/>
                <AiFillMail/> preritkrjha@gmail.com <br/>
                <GrFormLocation/> Patna, Bihar <br/>
                <AiFillLinkedin/>　
                <AiFillMail/>　
                <AiFillGithub/>　
                <GrResume/>
                </p>
            </div>
        </div>










            {/* <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",padding:"50px"}}>
            
           
            <br/>
            <br/>
            <br/>
            <div class="container" style={{background: "#fff",transform: "translate(0px,-100px)"}}>
            <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>Contact</p>
            <div class="layout" style={{margin: "auto"}}>
                <p class="col col-main" style={{background: "#fff"}}>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
            <div class="text-center my-wrap pt-5 pb-5">
            <div class="custom-form" >
                <div class="custom-form-label">
                    <label for="userid">Email Address</label>
                </div>
                <input type="text" name="userid" class="custom-form-control" placeholder="" required="" />
            </div>
            <div class="custom-form">
                <div class="custom-form-label">
                    <label for="subject">Subject</label>
                </div>
                <input type="subject" name="Subject" class="custom-form-control" placeholder="" required="" />
            </div>
            <div class="custom-form">
                <div class="custom-form-label">
                    <label for="password">Message</label>
                </div>
                <textarea rows="6" name="message" class="custom-form-control" placeholder="" required="" />
            </div>
            <Button variant="primary" style={{background : "#217dbb"}}>SEND MAIL</Button>{' '}
            </div>

      </p>
      <p class="col" role="complementary" style={{background: "#fff",marginTop: "100px", textAlign:"center",fontSize: "1.5rem"}}>      

            <strong>PRERIT KUMAR JHA</strong><br/>
            A CP-DEV Geek from IIIT Pune  
            <hr/>
            <p style={{textAlign: "center"}}>
            <AiFillPhone/> (+91) 9110939089 <br/>
            <AiFillMail/> preritkrjha@gmail.com <br/>
            <GrFormLocation/> Patna, Bihar <br/>
            <AiFillLinkedin/>　
            <AiFillMail/>　
            <AiFillGithub/>　
            <GrResume/>
            </p>
      </p>  
  </div>   
</div>
            </div> */}
        </div>
    )
}
