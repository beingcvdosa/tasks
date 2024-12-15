import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    // Fetch all notes from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/notes')
            .then((response) => setNotes(response.data))
            .catch((error) => console.error('Error fetching notes:', error));
    }, []);

    // Add a new note
    const addNote = () => {
        if (newNote.trim() === '') return; // Basic validation
        const timestamp = new Date().toISOString(); // Get current UTC time
        axios.post('http://localhost:5000/notes', { content: newNote, timestamp })
            .then((response) => {
                setNotes([...notes, response.data]);
                setNewNote(''); // Clear the input
            })
            .catch((error) => console.error('Error adding note:', error));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addNote(); // Call addNote on Enter key press
        }
    };
    

    // Delete a note
    const deleteNote = (id) => {
        axios.delete(`http://localhost:5000/notes/${id}`)
            .then(() => {
                setNotes(notes.filter((note) => note.id !== id));
            })
            .catch((error) => console.error('Error deleting note:', error));
    };

    return (
        <div style={{ padding: '0px', width: "100%" }}>
            <h1 className='heading'>Notes</h1>
            <div className='inputContainer'>
                <input
                    type="text"
                    placeholder="take a note..."
                    value={newNote}
                    className='inputfield'
                    onChange={(e) => setNewNote(e.target.value)}
                    onKeyDown={handleKeyPress} 

                />
                <button onClick={addNote} style={{ padding: '10px', marginLeft: '10px' }}>
                    Add Note
                </button>
            </div>
            <ul className='list'>
                {notes.map((note) => (
                    <div key={note.id} className="note-card" style={{ position: 'relative', marginBottom: '20px' }}>
                        <p>{note.content}</p>
                        <img
                            src="https://cdn.iconscout.com/icon/free/png-256/free-trash-can-icon-download-in-svg-png-gif-file-formats--garbage-bin-ui-ux-outlined-pack-network-communication-icons-2727406.png?f=webp&w=256"
                            alt="Delete"
                            style={{
                                width: '15%',
                                height: 'auto',
                                position: "absolute",
                                right: "5%",
                                bottom: "5px",
                                cursor: "pointer"
                            }}
                            onClick={() => deleteNote(note.id)}
                        />
                        <p style={{
                            fontSize: '12px',
                            position: "absolute",
                            left: "10px",
                            bottom: "10px",
                            color: 'gray',
                        }}>
                            {/* Convert UTC timestamp to local time */}
                            {new Date(note.timestamp + "Z").toLocaleString()} 
                        </p>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default App;
