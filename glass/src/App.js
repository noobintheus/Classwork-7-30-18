import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TwoPlayerScoreKeeper from "./TwoPlayerScoreKeeper";
import ScoreButton from "./ScoreButton";


class App extends Component {
  render() {
    return (
      <div className="App">
          <TwoPlayerScoreKeeper/>
          <ScoreButton/>
<kindle/> <DisplayBooks/>
      <AlienCharacter/> <DisplayAliens/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
