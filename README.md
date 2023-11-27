# Ayamese Backend

This is the backend for the exmpty cup assignment. It's built with Node.js, Express, and MongoDB.

## Features

- RESTful API for managing listings
- Shortlisting functionality
- Integration tests with Jest

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development, testing purposes and production build.

### Prerequisites

- Node.js
- Yarn
- MongoDB

## Setting up
- Clone github repo
    
    `git clone https://github.com/prakhargupta-jan/ayamese_backend.git`

### To start development server, run: 
    docker compose up

### To start deployment server.
    docker compose -f './docker-compose.prod.yml up 


## API Endpoints

- `GET /listings`: Get all listings
- `POST /shortlisted/:id`: Toggle shortlisted status of a listing
- `GET /shortlisted`: Get all shortlisted listings

## Built With

- [Node.js](https://nodejs.org) - JavaScript runtime
- [Express](https://expressjs.com) - Web application framework
- [Mongoose](https://mongoosejs.com) - MongoDB object modeling for Node.js
- [Jest](https://jestjs.io) - Testing framework