#!/bin/bash
yarn init -y
yarn add express mongoose dotenv morgan cross-env 
yarn add -D nodemon jest supertest
mkdir routes models controllers utils
touch index.js server.js db.js