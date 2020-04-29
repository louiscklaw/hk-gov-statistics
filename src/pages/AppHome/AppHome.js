import React, { Component } from 'react';

import {
  SearchBox,
  ApiList,
  TopBar
} from '../../components';


class AppHome extends Component{
  render(){
    return(
      <div>
        <TopBar />
        <SearchBox />
        <ApiList />
      </div>
    )
  }
}

export default AppHome;
