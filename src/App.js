import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeFrame } from './Components/HomeFrame/HomeFrame';
import { AboutFrame } from './Components/AboutFrame/AboutFrame';
import { ExperiencesFrame } from './Components/ExperiencesFrame/ExperiencesFrame';
import { EducationFrame } from './Components/EducationFrame/EducationFrame';
import { SkillFrame } from './Components/SkillFrame/SkillFrame';
import { AchievementsFrame } from './Components/AchievementsFrame/AchievementsFrame';
import { ProjectFrame } from './Components/ProjectsFrame/ProjectFrame';
import { ContactFrame } from './Components/ContactFrame/ContactFrame';
import { Footer } from './Components/FooterFrame/FooterFrame';
import './App.css'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.Mode = "Light";
    if(sessionStorage.getItem("Mode") == "Dark")
      sessionStorage.setItem("Mode","Dark");
    else sessionStorage.setItem("Mode","Light");
  }

  ModeChange() {
    sessionStorage.getItem("Mode")=="Light" ? sessionStorage.setItem("Mode","Dark") : sessionStorage.setItem("Mode","Light");
    window.location.reload(false);
  }

  render(){
    return (
      <div>
          <HomeFrame/>
          <AboutFrame/>
          <ExperiencesFrame/>
          <EducationFrame/>
          <SkillFrame/>
          <AchievementsFrame/>
          <ProjectFrame/>
          <ContactFrame/>
          <Footer/>
          <div className="covered" onClick={this.ModeChange}>
          { sessionStorage.getItem("Mode")=="Light" ? 
          <><input type= "checkbox"  className="open-button"/><br/></>
          :
          <><input type= "checkbox"  className="open-button" checked/><br/></>
          }
          </div>
      </div>
    )
  }
}

export default App;