import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [headers, setHeaders] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      const response = await axios.post(
        'https://chimpu.online/api/post.php',
        new URLSearchParams({ phonenumber: phoneNumber }),
        { validateStatus: () => true } // Allow all status codes
      );

      // Extract headers and set them in state
      setHeaders(response.headers);
    } catch (err) {
      console.error('Error posting data:', err);
      setError('An error occurred while fetching headers.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Post Data to API</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          style={{ margin: '0 10px', padding: '5px' }}
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Headers Received:</h2>
      {headers ? (
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          {Object.entries(headers).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </pre>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>No headers received yet.</p>
      )}
    </div>
  );
}

export default App;
