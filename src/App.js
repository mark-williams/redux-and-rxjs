import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beers from './components/Beers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <Beers />
      </div>
    );
  }
}

export default App;
