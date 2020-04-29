import React, { Component } from 'react';

import {
  SearchBox,
  ApiList,
  Nav
} from '../../components';


class AppHome extends Component{
  render(){
    return(
      <div>
        <SearchBox />
        <ApiList />
      </div>
    )
  }
}

export default AppHome;
