// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './PostList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>My Blog</h1>
    </header>
    <PostList />
  </div>
);

export default App;
