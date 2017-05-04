import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Whether Weather" /> 
        <Page />
      </div>
    )
  }
}

export default App;
