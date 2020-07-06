import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*ReactDOM.render(
  //React.createElement('div',null,"Hello World with create Element"),
  React.createElement('div',null,React.createElement('div',null,"Hello in span create Element")),
  document.getElementById('root')
);*/

ReactDOM.render(
  <div><App name="Your Name" age={25}/></div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
