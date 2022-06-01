import React from "react";
import "./ExperiencesFrame.scss";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Button } from "react-bootstrap";
import comet from "../../Pic/comet.png";
import texas from "../../Pic/texas.png";

export const ExperiencesFrame = () => {
  const [background, setmode] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#000" : "#f2f2f5"
  );
  const [text, settext] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#fff" : "#374054"
  );

  return (
    <div>
      <div
        className="OKK"
        style={{
          margin: "auto",
          textAlign: "center",
          background: `${background}`,
          padding: "10px",
        }}
      >
        <p
          class="underline-small"
          style={{
            textAlign: "center",
            fontSize: "2em",
            color: `${text}`,
          }}
        >
          Experience
        </p>
        <br />
        <br />
        <br />

        <div
          style={{
            width: "80%",
            background: "#fff",
            margin: "auto",
            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "20px",
          }}
        >
          <div className="expimg">
            <img
              src={texas}
              style={{ height: "100%", width: "100%", borderRadius: "20px" }}
            />
          </div>
          <div className="expall">
            <h2>Texas Instruments</h2>
            <b>Application Development Intern</b> | Apr 2022 – Jul 2022
            <hr />
            <div style={{ width: "90%", margin: "auto" }}>
              <div style={{ textAlign: "left" }}>
                <li>Tech Stack: React.js, Spring Boot, SQL</li>
                <li>
                  Working in Project Galileo Tech Modernization which is mainly
                  used to view and update critical information for each and
                  every product development life cycle
                </li>
                <li>
                  Working on code migration of the Web App from Perl-CGI to
                  React.js and Spring Boot.
                </li>
                <li>
                  Used AG-Grid Enterprise for smooth delivering of many complex
                  tables
                </li>
                <li>
                  Created multiple rest-api with sql queries to allows
                  interaction with RESTful web services.
                </li>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div
          style={{
            width: "80%",
            background: "#fff",
            margin: "auto",
            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "20px",
          }}
        >
          <div className="expimg">
            <img
              src={comet}
              style={{ height: "100%", width: "100%", borderRadius: "20px" }}
            />
          </div>
          <div className="expall">
            <h2>COMET Labs</h2>
            <b>MERN Stack Backend Developer</b> | Dec 2020 – Apr 2021
            <hr />
            <div style={{ width: "90%", margin: "auto" }}>
              <div style={{ textAlign: "left" }}>
                <li>
                  Major contribution in the COMET-Backend-OS as a member of Team
                  Delta on building the community app which connects nearly 5000
                  IIIT Students.
                </li>
                <li>
                  Edited UserContact Schema for Connecting Clubs and Contacts
                </li>
                <li>
                  Added APIs for Retrieving, Deleting, and Adding New Messages.
                </li>
                <li>Created Option to edit Star Features in Comments.</li>
                <li>
                  Updated Hierarchy in Club by adding the feature of Restricting
                  Members from Clubs.
                </li>
                <li>
                  Experienced important skills like project management, worktime
                  management, teamwork, and effective and efficient
                  communication.
                </li>
              </div>
            </div>
          </div>
        </div>

        {/* <div style={{ margin: "auto" }}>
          <div style={{ margin: "auto" }}>
            <div class="card2">
              <br />
              <h5 class="mb-1">IIITians Network</h5>

              <h6 class="font-weight-bolder">
                MERN Stack Backend Developer
                <span class="font-weight-light">
                  &nbsp;|&nbsp;Dec 2020 &ndash; Apr 2021
                </span>
              </h6>
              <div style={{ width: "80%", margin: "auto" }}>
                <div style={{ textAlign: "left" }}>
                  <li>
                    Major contribution in the COMET-Backend-OS as a member of
                    Team Delta on building the community app which connects
                    nearly 5000 IIIT Students.
                  </li>
                  <li>
                    Edited UserContact Schema for Connecting Clubs and Contacts
                  </li>
                  <li>
                    Added APIs for Retrieving, Deleting, and Adding New
                    Messages.
                  </li>
                  <li>Created Option to edit Star Features in Comments.</li>
                  <li>
                    Updated Hierarchy in Club by adding the feature of
                    Restricting Members from Clubs.
                  </li>
                  <li>
                    Experienced important skills like project management,
                    worktime management, teamwork, and effective and efficient
                    communication.
                  </li>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div> */}

        {/* <div className="box1" style={{width: "50%",marginLeft: "auto",marginRight: "auto",color: "#74808A",minWidth: "400px"}}>
            <div>

            <div style={{width: "20%",float:"left"}}>
            <img src="https://contact.iiitiansnetwork.com/img/logo/logo.png" width="90%" height="100px"/>
            </div>

            <div style={{width: "80%",float:"right"}}>
            <h4 style={{color : "#000"}}><strong>IIITians Network</strong></h4>
            <h5 style={{color : "#000",fontSize: "20px"}}>MERN Stack Backend Developer</h5>
            </div>
            </div>
            
            <ul>
            <div  style={{fontSize: "20px",color: "#217DBB"}}>
                <AiOutlineFieldTime/>
                 2nd year Onwards
                 <br/> 
            </div>
                <br/>
                <li>Open Source.</li>
                <li>Major Contributions in the Project Messaging Plugin Backend.</li>
                <li>Worked with AWS DynamoDB.</li>
                <li>Working with Team Delta on Mern Backend, Socket Io and Management.</li>
                <li>Experience on team work and management with github.</li>
                <li>Promoted to Core Member.</li>
            </ul>
            <p className="masthead-intro">
                <Button variant="outline-primary" style={{borderRadius: "1%",fontFamily: "monospace"}}>Know More →</Button>
            </p>
        </div> */}
        <br />
      </div>
    </div>
  );
};
