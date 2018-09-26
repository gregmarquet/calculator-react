import React, { Component } from 'react';

import Calculator from './components/Calculator/Calculator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  handleValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  onChange = (e) => {
    this.setState({

    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>React Calculator</h1>
        <Calculator />
        
      </div>
    );
  }
}

export default App;
