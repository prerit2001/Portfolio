import React from "react";
import "./ContactFrame.scss";
import { Button } from "react-bootstrap";
import { GrFormLocation, GrResume } from "react-icons/gr";
import {
  AiFillPhone,
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ContactFrame = () => {
  const [background, setmode] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#000" : "#f2f2f5"
  );
  const [text, settext] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "#fff" : "#374054"
  );
  const [border, setborder] = React.useState(
    sessionStorage.getItem("Mode") == "Dark" ? "gray" : "#fff"
  );
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          handleClick();
        },
        (error) => {
          console.log(error.text);
          handleErrorClick();
        }
      );
  };

  const [open, setOpen] = React.useState(false);
  const [erroropen, setErroropen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleErrorClick = () => {
    setErroropen(true);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErroropen(false);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        marginBottom: "40px",
        background: "white",
      }}
    >
      <p
        class="underline-small"
        style={{
          textAlign: "center",
          fontSize: "2em",
          color: "#374054",
        }}
      >
        Contact
      </p>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message send successfully !!!
        </Alert>
      </Snackbar>
      <Snackbar
        open={erroropen}
        autoHideDuration={3000}
        onClose={handleErrorClose}
      >
        <Alert onClose={handleClose} severity="error">
          Sorry, Something went worng !!!
        </Alert>
      </Snackbar>
      <form ref={form} onSubmit={sendEmail}>
        <div class="roww" style={{ margin: "auto" }}>
          <div
            class="colummm"
            style={{ background: "white", transform: "translate(-8px,0)" }}
          >
            <div class="text-center my-wrap pt-5 pb-5">
              <div class="custom-form">
                <div class="custom-form-label">
                  <label for="userid">Email Address</label>
                </div>
                <input
                  type="text"
                  name="from_name"
                  class="custom-form-control"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div class="custom-form">
                <div class="custom-form-label">
                  <label for="subject">Subject</label>
                </div>
                <input
                  type="subject"
                  name="subject"
                  class="custom-form-control"
                  placeholder="Heading"
                  required=""
                />
              </div>
              <div class="custom-form">
                <div class="custom-form-label">
                  <label for="password">Message</label>
                </div>
                <textarea
                  rows="6"
                  name="message"
                  class="custom-form-control"
                  placeholder="Feel Free to Contact, I am always here!!!"
                  required=""
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                style={{ background: "#217dbb" }}
              >
                SEND MAIL
              </Button>{" "}
            </div>
          </div>
          <div class="colummm" style={{ fontSize: "1.5rem" }}>
            <br />
            <br />
            <br />
            <strong>PRERIT KUMAR JHA</strong>
            <br />
            A CP-DEV Geek from IIIT Pune
            <hr />
            <p style={{ textAlign: "center", display: "block" }}>
              <AiFillMail /> preritkrjha@gmail.com <br />
              <GrFormLocation /> Patna, Bihar <br />
              <div style={{ margin: "auto" }}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/preritkrjha/"
                  style={{ color: "black" }}
                >
                  <AiFillLinkedin />
                </a>
                　
                <a
                  target="_blank"
                  href="https://github.com/prerit2001/"
                  style={{ color: "black" }}
                >
                  <AiFillGithub />
                </a>
                　
                <a>
                  {" "}
                  <AiFillMail />
                </a>
                　
              </div>
            </p>
          </div>
        </div>
      </form>
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
  );
};
