# my-social

This project was my fist ever full stack project.

It's a minimalistic clone of Facebook/generic social media site.

It's a PERN stack application.

# Features:
- Users can create an account
- Users can log in to their account that they created
- Users can make posts linked to their username
- Users can logout
- Users can change their username, if it is available.
- Users can edit their bio

# Technologies used:

### Front end:
- Create React & Redux app
- React
- Redux
- React-Redux
- Redux toolkit

### Back end:
- Node
- Express
- Nodemon
- Morgan
- Body Parser
- CORS
- DOTENV
- Concurrently
- node-postgres

### Database:
- Postgresql
- AWS cloud database


# Run it on your local machine

### Prerequisites
Before you start, make sure you have the following software installed on your computer:

- Node.js (version 14 or higher)
- NPM (version 6 or higher)

### Step 1: Download the code
- Download or clone the code for the project from the repository.

### Step 2: Install server-side dependencies
- Open a terminal window and navigate to the root directory of the project.
- Run npm install to install the server-side dependencies listed in the package.json file.

### Step 3: Install client-side dependencies

- Navigate to the client directory using cd client.
- Run npm install to install the client-side dependencies listed in the package.json file.

### Step 4: Start the server and client
- Navigate back to the root directory of the project using cd ...
- Run npm start to start both the server and client at the same time using the concurrently package. This command will run the dev script, which uses nodemon to monitor for changes to the server code and restarts the server automatically when changes are detected. It will also run the client script, which starts the client-side development server.

Once the server and client are running, open a web browser and go to http://localhost:3000 to view the application.

Congratulations! You now have a fully functional development environment for the full-stack app. You can make changes to the code and see the results in real-time.
