import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Page from './components/Page'
import Input from './components/Input'
import Detail from './components/Detail'
import Forecast from './components/Forecast'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Home () {
  return (
    <div>
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
        <div>
          <Header text="Whether Weather">
            <Input />
          </Header> 
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/detail/:city' component={Detail} />
            <Route render={function() {
                return <p>Not Found</p>
              }} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
