import React, { Component } from 'react';

import {SearchBox, TopBar} from '../../components';

class Stat extends Component{
  render(){
    return(
      <div>
        <TopBar />
        {/* <ScrollToTop /> */}
        <SearchBox show_search_input={false} />
        <section className="section">
        stat page here
        </section>
      </div>
    )
  }
}

export default Stat