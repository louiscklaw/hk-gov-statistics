import React , { Component, createContext } from 'react';

export const GlobalContext = createContext();

class GlobalContextProvider extends Component {
  state = {
    searchString:'initSearchString'
  };

  updateSearchString = (text_to_update) => {
    console.log("update search string");

  }

  render(){
    return(
      <GlobalContext.Provider value={{
        ...this.state,
        updateSearchString: this.updateSearchString
        }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;