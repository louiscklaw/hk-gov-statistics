import React, { Component } from 'react';

import ApiListCard from '../ApiListCard';

import { checkDevelop } from '../../common';

class ApiList extends Component{
  render(){
    let api_cards = 'test api_cards';

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