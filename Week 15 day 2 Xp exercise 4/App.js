// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Replace 'YOUR_WEBHOOK_URL' with the actual URL copied from the webhook site
  const webhookUrl = 'YOUR_WEBHOOK_URL';

  // Async function to send POST request
  const sendPostRequest = async () => {
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      console.log('Response:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>POST JSON Data</h1>
      </header>
      <button className="btn btn-primary" onClick={sendPostRequest}>
        Send POST Request
      </button>
    </div>
  );
};

export default App;
