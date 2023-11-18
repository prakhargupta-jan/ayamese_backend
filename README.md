# Ayamese Backend

This is the backend for the exmpty cup assignment. It's built with Node.js, Express, and MongoDB.

## Features

- RESTful API for managing listings
- Shortlisting functionality
- Integration tests with Jest

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- Yarn
- MongoDB

### Installing

1. Clone the repository:
git clone https://github.com/yourusername/ayamese_backend.git


2. Install dependencies:

yarn install

3. Create and Setup .env file in the root of the directory.

    `touch .env`
    
    Then MONGO_URI i.e. MongoDB instance containing user, password and Database name and a PORT in a seperate line like as follows.
    ```
    MONGO_URI={MongoDB URI}
    PORT={Port number}
    ```

4. Start the server:

    `yarn start`


The server will start on `localhost:{PORT}`.

## Running the tests

Run the tests with the following command:
    `yarn test`


## API Endpoints

- `GET /listings`: Get all listings
- `POST /shortlisted/:id`: Toggle shortlisted status of a listing
- `GET /shortlisted`: Get all shortlisted listings

## Built With

- [Node.js](https://nodejs.org) - JavaScript runtime
- [Express](https://expressjs.com) - Web application framework
- [Mongoose](https://mongoosejs.com) - MongoDB object modeling for Node.js
- [Jest](https://jestjs.io) - Testing framework