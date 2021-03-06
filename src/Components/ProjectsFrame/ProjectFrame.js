import React from "react";
import "./ProjectFrame.scss";
import { Button } from "react-bootstrap";
import LocoCart from "./../../Pic/LocoCart.JPG";
import Gifter from "./../../Pic/gifter.JPG";
import ChatApp from "./../../Pic/Chat.JPG";
import PhoneCompanion from "./../../Pic/PhoneCompanion.jpg";
import Explora from "./../../Pic/Explora.png";
import Pmat from "./../../Pic/Pmat.png";

export const ProjectFrame = () => {
  const [background, setmode] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#000" : "#f2f2f5"
  );
  const [text, settext] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#fff" : "#374054"
  );
  return (
    <div
      style={{
        textAlign: "center",
        // fontFamily: "'Lato', sans-serif",
        background: `${background}`,
        padding: "10px",
      }}
    >
      <p
        class="underline-small"
        style={{
          textAlign: "center",
          // fontFamily: "'Lato', sans-serif",
          fontSize: "2em",
          color: `${text}`,
        }}
      >
        Projects
      </p>
      <br />
      <br />
      <br />
      <div class="container">
        <div class="layout" style={{ margin: "auto" }}>
          <p
            class="col col-main"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <strong>Explora</strong>
            <br />
            A One Stop Destiny For All Travel Needs
            <br />
            <br />
            <img src={Explora} width="100%" height="300px" />
            <a href="https://github.com/BTP-Project-Semester-6" target="_blank">
              <Button variant="outline-primary" style={{ margin: "10px" }}>
                Explore
              </Button>{" "}
            </a>
          </p>
          <p
            class="col col-complementary"
            role="complementary"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <strong>PMAT</strong>
            <br />
            Project Management, Assistance and Tracking
            <br />
            <br />
            <img src={Pmat} width="50%" height="300px" />
            <br />
            <a href="https://github.com/BTP-Sem-5-Project" target="_blank">
              <Button variant="outline-primary" style={{ margin: "10px" }}>
                Explore
              </Button>{" "}
            </a>
          </p>
        </div>
      </div>
      <br />
      <div class="container">
        <div class="layout" style={{ margin: "auto" }}>
          <p
            class="col col-main"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <strong>LocoCart : We Connect Locally</strong>
            <br />
            Bidding Based E-commerce website
            <br />
            <br />
            <img src={LocoCart} width="100%" height="300px" />
            <a href="https://github.com/BTP-Project-Semester-4" target="_blank">
              {" "}
              <Button variant="outline-primary" style={{ margin: "10px" }}>
                Explore
              </Button>{" "}
            </a>
          </p>
          <p
            class="col col-complementary"
            role="complementary"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <strong>My Phone Companion</strong>
            <br />
            Access Your Phone Without Internet
            <br />
            <br />
            <img src={PhoneCompanion} width="50%" height="300px" />
            <br />
            <a
              href="https://github.com/prerit2001/Phone-Companion-Android-Studio"
              target="_blank"
            >
              {" "}
              <Button variant="outline-primary" style={{ margin: "10px" }}>
                Explore
              </Button>{" "}
            </a>
          </p>
        </div>
      </div>
      <br />
      <div class="container">
        <div class="layout" style={{ margin: "auto" }}>
          <p
            class="col col-main"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <strong>Gifter</strong>
            <br />
            Medium Between Needy and Patron For Their Desired Needs
            <br />
            <br />
            <img src={Gifter} width="100%" height="300px" />
            <a
              href="https://github.com/prerit2001/Gifter-MERN-Stack"
              target="_blank"
            >
              <Button variant="outline-primary" style={{ margin: "10px" }}>
                Explore
              </Button>{" "}
            </a>
          </p>
          <p
            class="col col-complementary"
            role="complementary"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <strong>Whatsapp Clone</strong>
            <br />
            Having All Necessary Features Of a Chat App
            <br />
            <br />
            <img
              src={
                "https://github.com/prerit2001/Whatsapp-Clone-Android-Stdio/blob/master/Screenshots/Screenshot_2020-06-29-18-53-13-64_fbe4b7aaa480e2323ff2703fedbc7818.png?raw=true"
              }
              width="50%"
              height="300px"
            />
            <br />
            <a
              href="https://github.com/prerit2001/Whatsapp-Clone-Android-Stdio"
              target="_blank"
            >
              {" "}
              <Button variant="outline-primary" style={{ margin: "10px" }}>
                Explore
              </Button>{" "}
            </a>
          </p>
        </div>
      </div>
      <br />
      <div class="container">
        <div class="layout" style={{ margin: "auto" }}>
          <p
            class="col col-main"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <strong>Movie-Recommendation-System</strong>
            <br />
            Machine Learning Script Based on Recommendation System
            <br />
            <br />
            <img
              src={
                "https://github.com/prerit2001/Movie-Recommendation-System-ML/blob/master/Screenshot/Capture1.PNG?raw=true"
              }
              width="100%"
              height="200px"
            />
            <br />
            <a
              href="https://github.com/prerit2001/Movie-Recommendation-System-ML"
              target="_blank"
            >
              {" "}
              <Button variant="outline-primary" style={{ margin: "10px" }}>
                Explore
              </Button>{" "}
            </a>
          </p>
          <p
            class="col col-complementary"
            role="complementary"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <strong>Sodoku Solver</strong>
            <br />
            Pygame , OpenCV based Soduko Solver
            <br />
            <br />
            <img
              src={
                "https://github.com/prerit2001/Backtracking-Bump-Python-Pygame/blob/master/Screenshots/2.PNG?raw=true"
              }
              width="50%"
              height="200px"
            />
            <br />
            <a
              href="https://github.com/prerit2001/Backtracking-Bump-Python-Pygame"
              target="_blank"
            >
              {" "}
              <Button variant="outline-primary" style={{ margin: "10px" }}>
                Explore
              </Button>
            </a>
          </p>
        </div>
      </div>
      <br />
      <div class="container">
        <div class="layout" style={{ margin: "auto" }}>
          <p
            class="col col-main"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <strong>Reactjs ChatApp</strong>
            <br />
            A WebChat App Built using React Js
            <br />
            <br />
            <img src={ChatApp} width="100%" height="300px" />
            <a
              href="https://github.com/prerit2001/Web-Messenger-ReactJs-Firebase"
              target="_blank"
            >
              <Button variant="outline-primary" style={{ margin: "10px" }}>
                Explore
              </Button>{" "}
            </a>
          </p>
          <p
            class="col col-complementary"
            role="complementary"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <strong>Virtual Interview Platform(VIP)</strong>
            <br />
            Live interviews, chat box, result portal, confrencing etc.
            <br />
            <br />
            <img
              src={
                "https://github.com/BTP-Project/Virtual-Interview-NodeJs-MySql/blob/master/Screenshots/1.PNG?raw=true"
              }
              width="100%"
              height="300px"
            />
            <br />
            <a href="https://github.com/BTP-Project/" target="_blank">
              <Button variant="outline-primary" style={{ margin: "10px" }}>
                Explore
              </Button>
            </a>
          </p>
        </div>
      </div>
      <p className="masthead-intro">
        <Button
          variant="success"
          style={{ borderRadius: "1%", fontFamily: "Lato" }}
        >
          <a
            href="https://github.com/prerit2001/"
            target="_blank"
            style={{ color: "white" }}
          >
            More Projects ???
          </a>
        </Button>
      </p>
    </div>
  );
};
