# Phone Number Form Submission to API

This is a simple Node.js application using **Express** to create a form where users can submit their phone numbers. The form sends the data to an external API, and the response headers are displayed in a formatted table.

## Features

- Displays a form to input a phone number.
- Submits the phone number to an external API (`https://chimpu.online/api/post.php`).
- Displays the headers received in the response from the API in a clean, tabular format.
- Custom styling for the headers and response data.

## Technologies Used

- **Node.js** - JavaScript runtime for the backend.
- **Express** - Web framework for Node.js.
- **Axios** - For making HTTP requests to an external API.
- **HTML** and **CSS** - For the user interface and styling.

## Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the repository

Clone the repository to your local machine:


git clone https://github.com/beingcvdosa/tasks.git
### 2. Install Dependencies
Navigate to the project directory and install the required dependencies:
cd phonenumber
npm install
### 3. Run the Application
Start the server:


Copy code
node server.js
The server will be running at http://localhost:3000.

### 4. Use the Application
Open your browser and go to http://localhost:3000.
Enter a phone number in the form and click Submit.
The headers from the external API's response will be displayed in a table format.
Custom Styling
The application includes custom CSS for styling the form and response table:

The form is simple with a text input for the phone number.
A table is generated dynamically to show the response headers, which is styled to enhance readability.
The headers have distinct color coding to make the response clear.
Troubleshooting
Issue with server not running: Make sure to run npm install to install dependencies before starting the server.
API response errors: If the API is down or returns an error, the application will return a status 500 error message