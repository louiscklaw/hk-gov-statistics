import React, { Component } from 'react';

import {Link} from "react-router-dom";

class TopBar extends Component{
  render(){
    return(
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">



          </div>
          <Link to={`/`}>Index</Link>
          <Link to={`/about`}>about</Link>
          <Link to={`/testpage`}>test</Link>
          <Link to={`/stat`}>stat</Link>
        </div>
      </nav>
    );
  }
}

export default TopBar;