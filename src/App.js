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
          <h1 className="App-title">React Calculator</h1>
        </header>
        <div className="main-container">
          <div className="calculator-container">
            <Calculator />
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
