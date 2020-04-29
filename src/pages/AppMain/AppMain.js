import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import About from '../About/About';

class AppMain extends Component{
  render(){
    return (
      <>
      <Switch>
        <Route exact path="/">
          <About></About>
        </Route>
      </Switch>
      </>
    )
  }
}

export default AppMain;