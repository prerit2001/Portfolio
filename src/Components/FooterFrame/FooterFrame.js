import React from "react";
import { Button } from "react-bootstrap";
import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  SocialMedia,
  SocialLogo,
  SocialMediaWrap,
  SocialIcon,
  WebsiteRights,
} from "./FooterFrame.element";

import {GrFormLocation,GrResume} from 'react-icons/gr'
import {AiFillPhone,AiFillMail,AiFillLinkedin,AiFillGithub,} from 'react-icons/ai'

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Get Bang The Subscribe Button Below To Recieve My Latest Updates.
          </FooterSubHeading>
          <div class="custom-form">
          <div class="custom-form-label">
                    <label for="userid">Email Address</label>
                </div>
                <input type="text" name="userid" class="custom-form-control" placeholder="" required="" />
                <br/>
                <Button variant="primary" style={{background : "#16569a",marginTop: "5px"}}>Subscribe</Button>{' '}
          </div>
        </FooterSubscription>
        <div style={{color:"#fff",fontSize: "2rem",marginTop: "20px"}}>
            <AiFillLinkedin/>　
            <AiFillMail/>　
            <AiFillGithub/>　
            </div>
            <br/>
           <div style={{color: "#fff"}}> © Copyright Prerit Kumar Jha. All Rights Reserved </div>
      </FooterContainer>
    </>
  );
};
