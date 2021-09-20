import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeFrame } from "./Components/HomeFrame/HomeFrame";
import { AboutFrame } from "./Components/AboutFrame/AboutFrame";
import { ExperiencesFrame } from "./Components/ExperiencesFrame/ExperiencesFrame";
import { EducationFrame } from "./Components/EducationFrame/EducationFrame";
import { SkillFrame } from "./Components/SkillFrame/SkillFrame";
import { AchievementsFrame } from "./Components/AchievementsFrame/AchievementsFrame";
import { ProjectFrame } from "./Components/ProjectsFrame/ProjectFrame";
import { ContactFrame } from "./Components/ContactFrame/ContactFrame";
import { Footer } from "./Components/FooterFrame/FooterFrame";
import "./App.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class App extends React.Component {
  state = {
    loading: true,
  };

  constructor(props) {
    super(props);

    if (sessionStorage.getItem("Mode") == "Dark")
      sessionStorage.setItem("Mode", "Dark");
    else sessionStorage.setItem("Mode", "Light");
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  ModeChange() {
    sessionStorage.getItem("Mode") == "Light"
      ? sessionStorage.setItem("Mode", "Dark")
      : sessionStorage.setItem("Mode", "Light");
    window.location.reload(false);
  }

  render() {
    const { loading } = this.state;
    console.log(this.state.loading);
    if (loading) {
      return (
        <div
          className="sweet-loading"
          style={{
            textAlign: "center",
            background: "#217dbb",
            height: "1000px",
            position: "relative",
          }}
        >
          <div
            style={{
              margin: "0",
              position: "absolute",
              top: "200px",
              left: "50%",
              transform: "translate(-50%, -50px)",
            }}
          >
            <img
              src="https://media3.giphy.com/media/DBJPIKSisfJMA/giphy.webp?cid=ecf05e47cza30ksffzwpz60ja1tjoff8cbsuhdtdbfe369vp&rid=giphy.webp&ct=g"
              width="100px"
              height="100px"
            />
            <br />
            <br />
            <PropagateLoader
              css={override}
              size={15}
              color={"#fff"}
              loading={this.state.loading}
            />
            <br />
            <strong style={{ color: "white" }}>
              {sessionStorage.getItem("Mode") == "Light" ? "Day" : "Night"}{" "}
            </strong>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div id="home" style={{ width: "100%" }}>
            {" "}
            <HomeFrame />
          </div>
          <div id="about" style={{ width: "100%" }}>
            {" "}
            <AboutFrame />
          </div>
          <div id="exp" style={{ width: "100%" }}>
            {" "}
            <ExperiencesFrame />
          </div>
          <div id="edu" style={{ width: "100%" }}>
            <EducationFrame />
          </div>
          <div id="skill" style={{ width: "100%" }}>
            <SkillFrame />
          </div>
          <div id="glory" style={{ width: "100%" }}>
            {" "}
            <AchievementsFrame />
          </div>
          <div id="project" style={{ width: "100%" }}>
            {" "}
            <ProjectFrame />
          </div>
          <div id="conctact" style={{ width: "100%" }}>
            {" "}
            <ContactFrame />
          </div>

          <Footer />
          <div className="covered" onClick={this.ModeChange}>
            {sessionStorage.getItem("Mode") == "Light" ? (
              <>
                <input type="checkbox" className="open-button" />
                <br />
              </>
            ) : (
              <>
                <input type="checkbox" className="open-button" checked />
                <br />
              </>
            )}
          </div>
        </>
      );
    }
  }
}

export default App;
