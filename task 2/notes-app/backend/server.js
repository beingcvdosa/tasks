const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin', // Replace with your MySQL password
    database: 'notes_db', // Replace with your database name
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Get all notes
app.get('/notes', (req, res) => {
    db.query('SELECT * FROM notes', (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Add a new note with timestamp
app.post('/notes', (req, res) => {
    const { content } = req.body;

    // Get the current timestamp in the correct format for MySQL
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');

    // Insert into the database with the formatted timestamp
    db.query('INSERT INTO notes (content, timestamp) VALUES (?, ?)', [content, formattedDate], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('An error occurred while adding the note.');
        }
        res.send({ id: result.insertId, content, timestamp: formattedDate });
    });
});

// Delete a note
app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM notes WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.send({ success: true });
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));