import React , { Component, createContext } from 'react';

export const HelloWorldContext = createContext();

class HelloWorldContextProvider extends Component {
  state = {apple: 'apple'};

  render(){
    return(
      <HelloWorldContext.Provider value={{...this.state}}>
        {this.props.children}
      </HelloWorldContext.Provider>
    );
  }
}

export default HelloWorldContextProvider;