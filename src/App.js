import React, { Component } from 'react'
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import HoodsForm from './components/HoodsForm'

class App extends Component {

  render(){
    return (
      <div className="App" style={{width:'100%', height:'100%', margin:'10px'}}>
        <HoodsForm></HoodsForm>
      </div>
    );
  }
}

export default App;
