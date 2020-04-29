/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import GlobalContextProvider from './context/GlobalContext';

import {AppMain} from './pages';

import './App.sass';

// import './App.css';
class App extends Component {
  render(){
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <GlobalContextProvider>
              <AppMain />
            </GlobalContextProvider>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
