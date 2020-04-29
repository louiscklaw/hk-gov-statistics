import React, { Component } from 'react';

import TopMenu from '../TopMenu';

import {Link} from "react-router-dom";

class Nav extends Component{
  render(){
    return(
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link class="navbar-item" to={`/`}>Index</Link>
            <Link class="navbar-item" to={`/testpage`}>test</Link>
            <Link class="navbar-item" to={`/stat`}>stat</Link>
            <Link class="navbar-item" to={`/about`}>about</Link>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Source</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;