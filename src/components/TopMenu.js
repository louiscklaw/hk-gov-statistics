import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TopMenu extends Component{
  render(){
    return(
      <>
          <Link to={`/`}>Index</Link>
          <Link to={`/about`}>about</Link>
          <Link to={`/testpage`}>test</Link>
          <Link to={`/stat`}>stat</Link>
      </>
    )
  }
}

export default TopMenu;