// src/Example2.js
import React, { Component } from 'react';
import data from './data.json';

class Example2 extends Component {
  render() {
    const { Skills } = data;
    return (
      <div>
        <h2>Skills</h2>
        {Skills.map((skillArea, index) => (
          <div key={index}>
            <h3>{skillArea.Area}</h3>
            <ul>
              {skillArea.SkillSet.map((skill, idx) => (
                <li key={idx} style={{ color: skill.Hot ? 'red' : 'black' }}>
                  {skill.Name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
