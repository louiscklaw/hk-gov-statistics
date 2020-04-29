import React, { Component } from 'react';

class TopBar extends Component{
  render(){
    return(
      <div>
        <div>
          <a href="/">Index</a>
          <a href='/about'>about</a>
          <a href="/test">test</a>
          <a href="/stat">stat</a>
        </div>
      </div>
    );
  }
}

export default TopBar;