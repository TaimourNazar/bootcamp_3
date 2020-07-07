import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return <div>
            Hello <strong>{name}</strong>! Age = {age - 5}
            <br/>
            <h1>Learning</h1>
            <ol>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ol>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <Hello firstName={name}></Hello>
          </div>
}

export default App;
