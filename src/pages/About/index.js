import React, { Component, useContext } from 'react';

import {SearchBox, Nav} from '../../components';

import {HelloWorldContext} from '../../context/HelloWorldContext';

class About extends Component{

  render(){
    const {test_context} = useContext(HelloWorldContext);

    return(
      <div>
        <Nav />
        {/* <ScrollToTop /> */}
        <SearchBox show_search_input={false} />
        <section className="section">
          test about content
          {test_context}
        </section>
      </div>
    )
  }
}

export default About;
