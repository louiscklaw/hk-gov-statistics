import React, { Component } from 'react';

import Nav from './Nav';

class SearchBox extends Component{
  render(){
    return(
      <div>
        <section className="hero is-info is-medium is-bold">
          <div className="hero-head">
            <Nav />
          </div>
          searchbox here
        </section>

      </div>
    )
  }
}

export default SearchBox