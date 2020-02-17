import React from 'react';

const Quote = props => {
  return (
    <blockquote id='text'>
      <p>{props.text}</p>
      <footer>
        —<span id='author'>{props.author}</span>,{' '}
        <cite id='book'>{props.title}</cite>
      </footer>
    </blockquote>
  );
};

export default Quote;
