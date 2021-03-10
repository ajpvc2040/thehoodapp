import React, { Component } from 'react'
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import HoodsForm from './components/HoodsForm'
import HousesForm from './components/HousesForm';
import BuddiesForm from './components/BuddiesForm';
import DebitForm from './components/DebitForm';

class App extends Component {

  render(){
    return (
      <div className="App" style={{width:'100%', height:'100vh', margin:'10px'}}>
        <DebitForm></DebitForm>
      </div>
    );
  }
}

export default App;
