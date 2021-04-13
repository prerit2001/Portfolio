import React from 'react'
import './ContactFrame.scss'
import {Button} from 'react-bootstrap'
import {GrFormLocation,GrResume} from 'react-icons/gr'
import {AiFillPhone,AiFillMail,AiFillLinkedin,AiFillGithub,} from 'react-icons/ai'


export const ContactFrame = () => {
    return (
        <div>
            <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",padding:"50px"}}>
            
           
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
                <textarea rows="6" cols="30" name="message" class="custom-form-control" placeholder="" required="" />
            </div>
            <Button variant="primary" style={{background : "#217dbb"}}>SEND MAIL</Button>{' '}
            </div>

      </p>
      <p class="col col-complementary" role="complementary" style={{background: "#fff", padding : "60px"}}>      
            
            <div style={{fontSize: "1.5rem"}}>    
            <strong>PRERIT KUMAR JHA</strong><br/>
            A CP-DEV Geek from IIIT Pune  
            <hr/>
            </div>
            <div>
            <br/>
            <br/>
            <br/>
            <div style={{fontSize: "1.5rem"}}>
            <AiFillPhone/> (+91) 9110939089
            <br/>
            <AiFillMail/> preritkrjha@gmail.com
            <br/>
            <GrFormLocation/> Patna, Bihar
            </div>
            <div style={{fontSize: "2rem",marginTop: "20px"}}>
            <AiFillLinkedin/>　
            <AiFillMail/>　
            <AiFillGithub/>　
            <GrResume/>
            </div>
            </div>
      </p>  
  </div>   
</div>
            </div>
        </div>
    )
}
