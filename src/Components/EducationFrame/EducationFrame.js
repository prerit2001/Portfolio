import React from 'react'
import './EducationFrame.scss'
import {ImLocation2} from 'react-icons/im'
import {Button} from 'react-bootstrap'

export const EducationFrame = () => {
    return (
        <div>
              <div style={{textAlign: "center",fontFamily: "'Lato', sans-serif",padding:"50px"}}>
            
            <p class="underline-small" style={{textAlign: "center",fontFamily: "'Lato', sans-serif",fontSize: "2em",color:"#374054"}}>Education</p>
            <br/>
            <br/>
            <br/>
            
            <div>
            <section class="we-offer-area text-center bg-gray">
          <div class="container">
                <div class="row our-offer-items less-carousel">
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <ImLocation2 style={{width: "25%",height: "1%"}} className="changee"/>
                            <h4>Indian Institute of Information Technology, Pune</h4>
                            <p>
                                <ul>
                                    <li> 2019 - 2023</li>
                                    <li> B.Tech</li>
                                    <li> Comuter Science Engineering(CSE)</li>
                                    <p className="masthead-intro">
                                        <Button variant="success" style={{borderRadius: "1%",fontFamily: "monospace"}}>Know More →</Button>
                                    </p>
                                </ul> 
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <ImLocation2 style={{width: "25%",height: "1%"}} className="changee"/>
                            <h4>Digdarshan Higher Secondary School,<br/> Patna</h4>
                            <p>
                                <ul>
                                    <li> 2018 - 2019</li>
                                    <li> 12th Board</li>
                                    <li> Science, CBSE</li>
                                    <p className="masthead-intro">
                                        <Button variant="success" style={{borderRadius: "1%",fontFamily: "monospace"}}>Know More →</Button>
                                    </p>
                                </ul> 
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <ImLocation2 style={{width: "25%",height: "1%"}} className="changee"/>
                            <h4>Kendriya Vidyalaya Sangathan(KVS) No. 1, Patna</h4>
                            <p>
                                <ul>
                                    <li> 2016 - 2017</li>
                                    <li> 10th Board</li>
                                    <li> Science, CBSE</li>
                                    <p className="masthead-intro">
                                        <Button variant="success" style={{borderRadius: "1%",fontFamily: "monospace"}}>Know More →</Button>
                                    </p>
                                </ul> 
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </section>
            </div>
        
        </div>
        </div>
    )
}
