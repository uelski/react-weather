import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Input from './components/Input';

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Whether Weather">
          <Input />
        </Header> 
        <Page>
          <Input />
        </Page>
      </div>
    )
  }
}

export default App;
