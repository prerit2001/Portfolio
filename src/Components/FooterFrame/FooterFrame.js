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

import { GrFormLocation, GrResume } from "react-icons/gr";
import {
  AiFillPhone,
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export const Footer = () => {
  const [text, settext] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#000" : "#fff"
  );
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading style={{ color: `${text}` }}>
            <b>
              Get Bang The Subscribe Button Below To Recieve My Latest Updates.
            </b>
          </FooterSubHeading>
          <div class="custom-form">
            <div class="custom-form-label">
              <label for="userid">Email Address</label>
            </div>
            <input
              type="text"
              name="userid"
              class="custom-form-control"
              placeholder=""
              required=""
            />
            <br />
            <Button
              variant="primary"
              style={{ background: "#16569a", marginTop: "5px" }}
              onClick={(e) => alert("Thanks, Now You Will Recieve My Update")}
            >
              Subscribe
            </Button>{" "}
          </div>
        </FooterSubscription>
        <div style={{ color: `${text}`, fontSize: "2rem", marginTop: "20px" }}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/preritkrjha/"
            style={{ color: "white" }}
          >
            <AiFillLinkedin />
          </a>
          　
          <a
            target="_blank"
            href="https://github.com/prerit2001/"
            style={{ color: "white" }}
          >
            <AiFillGithub />
          </a>
          　
          <a style={{ color: "white" }}>
            {" "}
            <AiFillMail />
          </a>
        </div>
        <br />
        <div style={{ color: `${text}`, textAlign: "center" }}>
          <b> © Copyright Prerit Kumar Jha. All Rights Reserved </b>
        </div>
      </FooterContainer>
    </>
  );
};
