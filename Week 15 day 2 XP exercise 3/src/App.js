// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>JSON Data Display</h1>
    </header>
    <Example1 />
    <Example2 />
    <Example3 />
  </div>
);

export default App;
