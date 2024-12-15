# Notes App

This is a full-stack Notes Application built using **React** for the frontend and **Express** with **MySQL** for the backend. It allows users to add, view, and delete notes. The notes are stored in a MySQL database, and the app uses Axios for making API requests.

## Features

- Add new notes with content.
- Display all saved notes.
- Delete notes from the list.
- Automatically tracks the timestamp for each note.
- Simple and clean user interface.

## Technologies Used

### Frontend:
- **React** - JavaScript library for building the user interface.
- **CSS** - For styling the app.
- **Axios** - For making HTTP requests to the backend.

### Backend:
- **Express.js** - A Node.js framework for handling API routes.
- **MySQL** - For storing notes and timestamps.
- **CORS** - For enabling cross-origin requests between the frontend and backend.
- **Body-Parser** - For parsing incoming request bodies.

## Setup Instructions

Follow the steps below to run both the frontend and backend locally.

### 1. Clone the repository

Clone the repository to your local machine:

git clone https://github.com/beingcvdosa/tasks.git

### 2. Set up the Backend (Express & MySQL)
Install dependencies
Navigate to the backend folder (if separate):

cd backend
npm install

### Configure MySQL Database
Create a database in MySQL:

CREATE DATABASE notes_db;

### Create a table to store the notes:

USE notes_db;

CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    timestamp DATETIME NOT NULL
);

### Update the backend/server.js file with your MySQL credentials (if different from default):

const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'yourpassword', // Replace with your MySQL password
database: 'notes_db',
});

### Start the Backend
Run the Express server:

npm start
The backend will be running at http://localhost:5000.

### 3. Set up the Frontend (React)
Navigate to the frontend folder (if separate):

cd frontend
npm install
Configure the API URL
Make sure that the frontend is making requests to the correct API endpoint (update http://localhost:5000 if necessary).

### Start the Frontend
Run the React app:

npm start
The frontend will be running at http://localhost:3000.

### 4. Testing the Application
Open your browser and go to http://localhost:3000 to use the Notes app.
You can add notes, view them, and delete them.
The notes will be stored in the MySQL database, and the timestamp will be shown with each note.