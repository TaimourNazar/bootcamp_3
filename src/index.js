import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MediaCard from './MediaCard';
import Gate from './Gate';
import * as serviceWorker from './serviceWorker';
import pic_field from './field.jpg';

/*ReactDOM.render(
  //React.createElement('div',null,"Hello World with create Element"),
  React.createElement('div',null,React.createElement('div',null,"Hello in span create Element")),
  document.getElementById('root')
);*/

ReactDOM.render(
  <div>
    <App name="Robin Hood" age={25}/>
    <MediaCard title="Displaying Media Card" body="This is Media Card. It shows an image with description" imageUrl={pic_field}/>
    <Gate isOpen={false}/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
