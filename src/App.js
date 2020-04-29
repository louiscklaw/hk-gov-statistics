/*eslint-disable no-unused-vars*/

import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AppMain} from './pages';

import './App.sass';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        香港統計數字
        <AppMain />
      </div>
    </BrowserRouter>
  );
}

export default App;
