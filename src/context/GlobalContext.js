import React , { Component, createContext } from 'react';

import all_api_manifest from '../api_catalogue/all_api_manifest.json';
import all_api_manifest_99 from '../api_catalogue/all_api_manifest_99.json';

export const GlobalContext = createContext();

class GlobalContextProvider extends Component {
  state = {
    searchString:'initSearchString',
    api_dictionary: all_api_manifest_99
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