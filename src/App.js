import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeFrame } from './Components/HomeFrame/HomeFrame';
import { AboutFrame } from './Components/AboutFrame/AboutFrame';
import { ExperiencesFrame } from './Components/ExperiencesFrame/ExperiencesFrame';
import { EducationFrame } from './Components/EducationFrame/EducationFrame';
import { SkillFrame } from './Components/SkillFrame/SkillFrame';
import { AchievementsFrame } from './Components/AchievementsFrame/AchievementsFrame';
import { ProjectFrame } from './Components/ProjectsFrame/ProjectFrame';


class App extends React.Component{
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
      </div>
    )
  }
}

export default App;