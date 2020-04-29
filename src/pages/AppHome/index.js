import React, { useContext } from 'react';

import {
  SearchBox,
  ApiList,
  Nav
} from '../../components';

import {GlobalContext} from '../../context/GlobalContext';

const AppHome = () => {
  // console.log(useContext(GlobalContext));
  var {api_dictionary} = useContext(GlobalContext);

  return(
    <div>
      <SearchBox />
      <ApiList search_filters={[]} all_api_list={api_dictionary} />
    </div>
  )
}

export default AppHome;