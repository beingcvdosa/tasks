# Task Submission App

This is a simple web application built with React that allows users to input tasks and submit them to an API. The app displays a table of tasks for a project and allows editing each field. Once the tasks are filled out, you can submit the data to a specified endpoint.

## Features

- Display a list of predefined tasks in a table format.
- Allow editing of task details for each field.
- Submit the task data to an API (currently set to a test URL, changeable to your actual API).
- User-friendly interface with simple design.

## Technologies Used

- **HTML5** - Basic structure of the app.
- **CSS** - Styling for the app.
- **React.js** - JavaScript library for building the user interface.
- **Babel** - JavaScript compiler to run JSX code directly in the browser.
- **Fetch API** - For making HTTP requests to the backend.

## Setup Instructions

Follow these steps to run the app locally:

### 1. Clone the repository

Clone the repository to your local machine:

git clone https://github.com/beingcvdosa/tasks.git

### 2. Open the project
The application is a simple HTML file with embedded React code, so there is no need to install anything.
Open the index.html file in your web browser. You should see the task list displayed in a table format.

### 3. Modify the API URL (optional)
The app currently sends a POST request to a test URL (https://yourtestapi.com).
You can change the API endpoint URL in the handleSubmit function to your actual API URL.

### 4. Run the app
Simply open the index.html file in any modern browser (Chrome, Firefox, Safari, etc.) to start using the app.

### 5. Editing and Submitting Data
You can edit the text fields under each task.
When you're done, click the Post Data button to submit the task data.
Notes
This app does not require a backend server to run, but it expects a backend API to handle the POST request.
Make sure your API can handle the incoming data structure.
