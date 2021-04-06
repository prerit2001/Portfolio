import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeFrame } from './Components/HomeFrame/HomeFrame';
import { AboutFrame } from './Components/AboutFrame/AboutFrame';


class App extends React.Component{
  render(){
    return (
      <div>
          <HomeFrame/>
          <AboutFrame/>
      </div>
    )
  }
}

export default App;