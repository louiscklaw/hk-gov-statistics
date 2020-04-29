import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import AppHome from '../AppHome/AppHome';
import About from '../About/About';

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

        </Switch>
      </>
    )
  }
}

export default AppMain;