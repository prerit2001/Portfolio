import React from 'react'
import './ProjectFrame.scss'
import {Button} from 'react-bootstrap'
import LocoCart from './../../Pic/LocoCart.JPG'
import Gifter from './../../Pic/gifter.JPG'
import ChatApp from './../../Pic/Chat.JPG'
import PhoneCompanion from './../../Pic/PhoneCompanion.jpg'

export const ProjectFrame = () => {
    return (
        <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",background: "#f2f2f5",padding:"50px"}}>
                
            <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>Projects</p>
            <br/>
            <br/>
            <br/>
            <div class="container"> 
                <div class="layout" style={{margin: "auto"}}>
                    <p class="col col-main" style={{background: "white"}}>
                    <strong>LocoCart : We Connect Locally</strong><br/>
                          Bidding Based E-commerce website<br/><br/>
                    <img src={LocoCart} width="100%" height="300px"/>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Source</Button>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Demo</Button>
                    <Button variant="outline-primary"  style={{margin: "10px"}}>More</Button>
                    </p>
                    <p class="col col-complementary" role="complementary" style={{background: "white"}}>
                    <strong>My Phone Companion</strong><br/>
                          Access Your Phone Without Internet<br/><br/>
                    <img src={PhoneCompanion} width="50%" height="300px"/><br/>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Source</Button>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Demo</Button>
                    <Button variant="outline-primary"  style={{margin: "10px"}}>More</Button>
                    </p>  
                </div>   
            </div>
            <br/>
            <div class="container"> 
                <div class="layout" style={{margin: "auto"}}>
                    <p class="col col-main" style={{background: "white"}}>
                    <strong>Gifter</strong><br/>
                    Medium Between Needy and Patron For Their Desired Needs<br/><br/>
                    <img src={Gifter} width="100%" height="300px"/>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Source</Button>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Demo</Button>
                    <Button variant="outline-primary"  style={{margin: "10px"}}>More</Button>
                    </p>
                    <p class="col col-complementary" role="complementary" style={{background: "white"}}>
                    <strong>Whatsapp Clone</strong><br/>
                    Having All Necessary Features Of a Chat App<br/><br/>
                    <img src={"https://github.com/prerit2001/Whatsapp-Clone-Android-Stdio/blob/master/Screenshots/Screenshot_2020-06-29-18-53-13-64_fbe4b7aaa480e2323ff2703fedbc7818.png?raw=true"} width="50%" height="300px"/>
                    <br/>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Source</Button>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Demo</Button>
                    <Button variant="outline-primary"  style={{margin: "10px"}}>More</Button>
                    </p>  
                </div>   
            </div>
            <br/>
            <div class="container"> 
                <div class="layout" style={{margin: "auto"}}>
                    <p class="col col-main" style={{background: "white"}}>
                    <strong>Movie-Recommendation-System</strong><br/>
                    Machine Learning Script Based on Recommendation System<br/><br/>
                    <img src={"https://github.com/prerit2001/Movie-Recommendation-System-ML/blob/master/Screenshot/Capture1.PNG?raw=true"} width="100%" height="200px"/><br/>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Source</Button>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Demo</Button>
                    <Button variant="outline-primary"  style={{margin: "10px"}}>More</Button>
                    </p>
                    <p class="col col-complementary" role="complementary" style={{background: "white"}}>
                    <strong>Sodoku Solver</strong><br/>
                    Pygame , OpenCV based Soduko Solver<br/><br/>
                    <img src={"https://github.com/prerit2001/Backtracking-Bump-Python-Pygame/blob/master/Screenshots/2.PNG?raw=true"} width="50%" height="200px"/>
                    <br/>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Source</Button>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Demo</Button>
                    <Button variant="outline-primary"  style={{margin: "10px"}}>More</Button>
                    </p>  
                </div>   
            </div>
            <br/>
            <div class="container"> 
                <div class="layout" style={{margin: "auto"}}>
                    <p class="col col-main" style={{background: "white"}}>
                    <strong>Reactjs ChatApp</strong><br/>
                    A WebChat App Built using React Js<br/><br/>
                    <img src={ChatApp} width="100%" height="300px"/>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Source</Button>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Demo</Button>
                    <Button variant="outline-primary"  style={{margin: "10px"}}>More</Button>
                    </p>
                    <p class="col col-complementary" role="complementary" style={{background: "white"}}>
                    <strong>Virtual Interview Platform(VIP)</strong><br/>
                    Live interviews, chat box, result portal, confrencing etc.<br/><br/>
                    <img src={"https://github.com/BTP-Project/Virtual-Interview-NodeJs-MySql/blob/master/Screenshots/1.PNG?raw=true"} width="100%" height="300px"/>
                    <br/>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Source</Button>
                    <Button variant="outline-primary" style={{margin: "10px"}}>Demo</Button>
                    <Button variant="outline-primary"  style={{margin: "10px"}}>More</Button>
                    </p>  
                </div>   
            </div>
            <p className="masthead-intro">
                    <Button variant="success" style={{borderRadius: "1%",fontFamily: "Lato"}}>More Projects →</Button>
            </p>

        </div>
    )
}