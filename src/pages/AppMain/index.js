import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import {
  AppHome,
  About,
  Stat,
  TestPage
} from '../index'

class AppMain extends Component{
  render(){
    return (
      <>
        <Switch>

          <Route exact path="/">
            <AppHome></AppHome>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/stat">
            <Stat></Stat>
          </Route>

          <Route path="/testpage">
            <TestPage></TestPage>
          </Route>

        </Switch>
      </>
    )
  }
}

export default AppMain;