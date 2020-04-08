import React, { useState, useReducer } from 'react';

//import { produce } from 'immer';
import Navigation from './navigation';
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
//const initialState = { count: 10 };
export default function Headers(props) {
  //const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="header">
      <div>
        <p className="title-name">雄心万丈，躺在床上</p>
      </div>
      <Navigation {...props} />
    </div>
  );
}
