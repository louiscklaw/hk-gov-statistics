import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import {SearchBox} from '../../components';

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
            {/* <ScrollToTop /> */}
            <SearchBox show_search_input={false} />
            <section className="section">
              <About />
            </section>
          </Route>

        </Switch>
      </>
    )
  }
}

export default AppMain;