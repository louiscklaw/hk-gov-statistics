/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import GlobalContextProvider from './context/GlobalContext';

import {AppMain} from './pages';
import {Footer} from './components'

import './App.sass';

// import './App.css';
class App extends Component {
  render(){
    return (
      <>
        <GlobalContextProvider>
          <BrowserRouter>
            <div className="App">
              <AppMain />
              <Footer/>
            </div>
          </BrowserRouter>
        </GlobalContextProvider>
      </>
    )
  }
}

export default App;
