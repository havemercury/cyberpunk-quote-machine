import React from 'react';

const NewQuote = props => (
  <button id='new-quote' onClick={props.clickHandler}>
    <i className='fas fa-redo'></i>&nbsp;
    {props.text}
  </button>
);

export default NewQuote;
