import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeFrame } from './Components/HomeFrame/HomeFrame';


class App extends React.Component{
  render(){
    return (
      <div>
          <HomeFrame/>
      </div>
    )
  }
}

export default App;