import React, { Component } from 'react';

import {Link} from "react-router-dom";

class TopBar extends Component{
  render(){
    return(
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              {/* <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" /> */}
              <h3 className="title is-3">
                LouisLabs
                <span style={{
                  fontSize: '0.5em',
                  paddingLeft: '10px'
                }}>last update: xxxxxx</span>
              </h3>
            </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
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