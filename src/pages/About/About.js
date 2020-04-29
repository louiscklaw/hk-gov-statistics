import React, { Component } from 'react';

import {SearchBox, TopBar} from '../../components';

// import '../../App.sass';

class About extends Component{
  render(){
    return(
      <div>
        <TopBar />
        {/* <ScrollToTop /> */}
        <SearchBox show_search_input={false} />
        <section className="section">
          test about content
        </section>
      </div>
    )
  }
}

export default About;
