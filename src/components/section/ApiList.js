import React, { Component, useContext } from 'react';

import ApiListCard from '../ApiListCard';

import { checkDevelop } from '../../common';

import {GlobalContext} from '../../context/GlobalContext';



class ApiList extends Component{

  filterUsingKeyword(keywords, json_in){
    if (keywords.length > 0){
      try {
        let having_all_keywords = !(keywords
          .map(kword => this.plaintextSearch(json_in, kword) > -1 )
          .includes(false))
          return having_all_keywords
      } catch (err) {
        console.error('error',typeof(keywords))
      }
    }else{
      // TODO: ???
      return true
    }
  }


  render(){
    let all_api_list = 1;
    let search_string = 2;
    // console.log(useContext(GlobalContext));

    if (checkDevelop()){
      console.log('this.props', this.props)
    }

    let api_cards = Object.keys(all_api_list)
      .filter( k => { return this.filterUsingKeyword([search_string], all_api_list[k]) })
      .map( open_api => {
        // let{groups, organization, resources} = all_api_list[open_api].result

        return this.getCard(all_api_list[open_api], open_api)
      })
      .sort()

      // this.props.update_api_found(api_cards.length)

    return(
      <div className="container">
        <div>
          <ul className="flex-container wrap">
            {api_cards}
          </ul>
        </div>
      </div>
    )
  }
}

export default ApiList;