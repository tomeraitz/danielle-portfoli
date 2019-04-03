import React, { Component } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './styles/home.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <NavBar />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
