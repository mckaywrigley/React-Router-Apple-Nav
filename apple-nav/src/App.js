import React, { Component } from 'react';
import './App.css';
import navData from './nav-data';

import Nav from './components/Nav'

class App extends Component {
  constructor() {
    super();
    this.state = {
      navdata: navData
    }
  }
  render() {
    return (
      <div className="App">
        <Nav 
        navdata={this.state.navdata}
        />
      </div>
    );
  }
}

export default App;
