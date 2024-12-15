const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the form
app.get('/', (req, res) => {
    res.send(`
        <h1>Post Data to API</h1>
        <form action="/submit" method="post">
            <label>Phone Number:</label>
            <input type="text" name="phonenumber" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle form submission
app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('https://chimpu.online/api/post.php', 
            new URLSearchParams({ phonenumber: req.body.phonenumber })
        );

        // Create a table for headers
        const headerRows = Object.entries(response.headers)
            .map(([key, value]) => `
                <tr>
                    <td><strong>${key}</strong></td>
                    <td>${value}</td>
                </tr>
            `)
            .join('');

        // Send response with table format and custom font styles
        res.send(`
            <html>
                <head>
                    <style>
                        body {
                            font-family: 'Arial', sans-serif;
                            color: #333;
                            padding: 20px;
                        }
                        h1 {
                            font-family: 'Georgia', serif;
                            color: #2c3e50;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 20px;
                        }
                        th, td {
                            border: 1px solid #ddd;
                            padding: 8px;
                            text-align: left;
                        }
                        th {
                            background-color: #f2f2f2;
                            color: #2c3e50;
                        }
                        td {
                            background-color: #f9f9f9;
                            color: #16a085;
                        }
                        strong {
                            color: #e74c3c;
                        }
                        a {
                            display: block;
                            margin-top: 20px;
                            color: #3498db;
                            text-decoration: none;
                        }
                    </style>
                </head>
                <body>
                    <h1>Headers Received</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Header</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${headerRows}
                        </tbody>
                    </table>
                    <a href="/">Go Back</a>
                </body>
            </html>
        `);
    } catch (error) {
        res.status(500).send('Error retrieving data from the API.');
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
