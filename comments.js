//create web server with express
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

//set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set up static files
app.use(express.static(path.join(__dirname, '../client/dist')));

//import database
const db = require('../database/index.js');

//get all comments
