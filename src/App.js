import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Input from './components/Input';
import Forecast from './components/Forecast';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function Home () {
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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/forecast' component={Forecast} />
          <Route render={function() {
              return <p>Not Found</p>
            }} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
