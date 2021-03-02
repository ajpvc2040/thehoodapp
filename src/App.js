import React, { Component } from 'react'
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import HoodsForm from './components/HoodsForm'
import HousesForm from './components/HousesForm';
import BuddiesForm from './components/BuddiesForm';

class App extends Component {

  render(){
    return (
      <div className="App" style={{width:'100%', height:'100vh', margin:'10px'}}>
        <BuddiesForm></BuddiesForm>
      </div>
    );
  }
}

export default App;
