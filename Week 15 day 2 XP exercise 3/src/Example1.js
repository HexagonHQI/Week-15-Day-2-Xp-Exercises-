// src/Example1.js
import React, { Component } from 'react';
import data from './data.json';

class Example1 extends Component {
  render() {
    const { SocialMedias } = data;
    return (
      <div>
        <h2>Social Media Links</h2>
        <ul>
          {SocialMedias.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
