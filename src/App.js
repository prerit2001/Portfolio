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
    sessionStorage.setItem("Mode","Light");
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
          <div className="covered">
          <input type= "checkbox" className="open-button"/><br/>
          <b style={{fontFamily: ""}}>Surf Dark</b>
          </div>
      </div>
    )
  }
}

export default App;