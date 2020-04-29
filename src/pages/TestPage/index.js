import React, { Component, useContext } from 'react';

import {TopBar} from '../../components';

import {GlobalContext} from '../../context/GlobalContext';

const TestPage = (props) =>{
  var {searchString, updateSearchString} = useContext(GlobalContext);
  console.log(searchString);
  return(
    <div>
      <TopBar/>
      <div>
        Test Page content
      </div>


      <p className="subtitle">
         Modern CSS framework based on{' '}
         <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
           Flexbox
         </a>
       </p>

       <div className="field">
         <div className="control">
           <input className="input" type="text" placeholder="Input" onKeyUp={updateSearchString}/>
         </div>
       </div>

       <div className="field">
         <p className="control">
           <span className="select">
             <select>
               <option>Select dropdown</option>
             </select>
           </span>
         </p>
       </div>

       <div className="buttons">
         <a className="button is-primary">Primary</a>
         <a className="button is-link">Link</a>
       </div>

    </div>
  )
}


// class TestPage extends Component{
//   constructor() {

//   }


//   render(){
//     //
//     var test_context = 'test_context';

//     return(
//       <>
//         <TopBar/>
//         <div>
//           {test_context}
//         </div>

//         <p className="subtitle">
//           Modern CSS framework based on{' '}
//           <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
//             Flexbox
//           </a>
//         </p>

//         <div className="field">
//           <div className="control">
//             <input className="input" type="text" placeholder="Input" />
//           </div>
//         </div>

//         <div className="field">
//           <p className="control">
//             <span className="select">
//               <select>
//                 <option>Select dropdown</option>
//               </select>
//             </span>
//           </p>
//         </div>

//         <div className="buttons">
//           <a className="button is-primary">Primary</a>
//           <a className="button is-link">Link</a>
//         </div>
//       </>
//     )
//   }
// }

export default TestPage;