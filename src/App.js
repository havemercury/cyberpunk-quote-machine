import React from 'react';
import './App.css';
import Quote from './components/Quote';
import NewQuote from './components/NewQuote';
import TweetQuote from './components/TweetQuote';
import { useSelector, useDispatch } from 'react-redux';
import { generateQuote } from './store/actions';

function App() {
  const num = useSelector(state => {
    if (state.randomIndex == null) {
      return Math.floor(Math.random() * state.quotes.length);
    } else {
      return state.randomIndex;
    }
  });
  const quote = useSelector(state => state.quotes[num].quote);
  const author = useSelector(state => state.quotes[num].author);
  const title = useSelector(state => state.quotes[num].title);
  const dispatch = useDispatch();

  return (
    <div className='App center-vh-container'>
      <div className='center-vh-item'>
        <h1 className='led-title text-center'>Cyberpunk Quote Machine</h1>
        <div id='quote-box' className='quote-sign'>
          <Quote text={quote} author={author} title={title} />
          <div className='flex flex-justify-between call-to-action'>
            <NewQuote
              text='New Quote'
              clickHandler={() => dispatch(generateQuote())}
            />

            <TweetQuote
              text='Tweet Quote'
              link={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `"${quote}" —${author}`
              )}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
