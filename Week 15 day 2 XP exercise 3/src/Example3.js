// src/Example3.js
import React, { Component } from 'react';
import data from './data.json';

class Example3 extends Component {
  render() {
    const { Experiences } = data;
    return (
      <div>
        <h2>Experiences</h2>
        {Experiences.map((experience, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
            <h3>{experience.companyName}</h3>
            <img src={experience.logo} alt="Company Logo" style={{ width: '100px' }} />
            <p><a href={experience.url} target="_blank" rel="noopener noreferrer">Company Website</a></p>
            {experience.roles.map((role, idx) => (
              <div key={idx}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p><strong>Duration:</strong> {role.startDate} - {role.endDate}</p>
                <p><strong>Location:</strong> {role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
