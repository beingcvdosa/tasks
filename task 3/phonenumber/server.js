const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the input form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>API Tester</title>
      </head>
      <body style="font-family: Arial, sans-serif; padding: 20px; text-align: center;">
        <h1>Enter Phone Number</h1>
        <form action="/submit" method="post" style="margin-top: 20px;">
          <input 
            type="text" 
            name="phonenumber" 
            placeholder="Enter phone number" 
            required 
            style="padding: 10px; width: 300px; font-size: 16px;">
          <br><br>
          <button type="submit" style="padding: 10px 20px; font-size: 16px;">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// Handle form submission
app.post('/submit', async (req, res) => {
  const { phonenumber } = req.body;

  try {
    const response = await axios.post(
      'https://chimpu.online/api/post.php',
      { phonenumber },
      { headers: { 'Content-Type': 'application/json' } }
    );

    // Extract headers and response body
    const headers = response.headers;
    const responseData = response.data;

    // Display results
    res.send(`
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1, h2 { color: #2c3e50; }
            .highlight { color: #e74c3c; font-weight: bold; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f4f4f4; }
            pre { background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd; overflow: auto; }
            a { display: inline-block; margin-top: 20px; color: #3498db; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1>API Response</h1>
          <h2>Response Data:</h2>
          <pre>${JSON.stringify(responseData, null, 2)}</pre>
          <h2>Headers:</h2>
          <table>
            <thead>
              <tr>
                <th>Header</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(headers)
                .map(([key, value]) => `
                  <tr>
                    <td>${key}</td>
                    <td>${value}</td>
                  </tr>
                `)
                .join('')}
            </tbody>
          </table>
          <a href="/">Go Back</a>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).send(`
      <html>
        <head>
          <title>Error</title>
        </head>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px; color: #e74c3c;">
          <h1>Error</h1>
          <p>Failed to retrieve data from the API.</p>
          <p>${error.response?.data || error.message}</p>
          <a href="/" style="color: #3498db;">Go Back</a>
        </body>
      </html>
    `);
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
