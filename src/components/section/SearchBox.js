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
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">香港統計數字</h1>
              <p className="control has-icons-left">
                <input
                  id="search_input"
                  className="input is-rounded is-large"
                  type="text"
                  placeholder="Search"
                  onChange={(e)=>{this.handleOnChange(e)}}
                  value={this.props.search_string}
                  />

                <span className="icon is-small is-left">
                  <i className="fas fa-binoculars"></i>
                </span>
              </p>
              <p className="subtitle is-6 total-api-count">
                {this.getTotalApiCount()} API in dictionary{this.showApiFound()}
              </p>
            </div>
          </div>


        </section>

      </div>
    )
  }
}

export default SearchBox