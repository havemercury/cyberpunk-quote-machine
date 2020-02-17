import React from 'react';

const TweetQuote = props => (
  <a
    href={props.link}
    target='_blank'
    rel='noopener noreferrer'
    id='tweet-quote'
  >
    <i className='fab fa-twitter'></i> {props.text}
  </a>
);

export default TweetQuote;
