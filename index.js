const express = require('express');
const app = express();
const port = 8000;

// Setup server and assigning schema path 
const db = require ('./config/mongoose');         // Start DB before starting express app
// const ToDo = require('./models/ToDoSchema');

// Setup URL Middleware - to process data sent through an HTTP request body.
const bodyParser = require('body-parser');
app.use(express.urlencoded({}));                   // Parsing form data from URL - Middleware, not for URL 

// routing all the URLs to route index file i.e App should use this file for any URL
app.use('/', require('./routes/index'));

//setup view engine
app.set('view engine' , 'ejs');
app.set('views' , './views');

// setup all Images, CSS and JS
app.use (express.static('assets'));                // Middleware to include CSS,JS, Images etc

// This code is for setting up and connecting to server
app.listen(port, function(err){
    if (err){
        console.log('Error in running the server : ', err);
    };
    console.log('Server is running on port : ' , port);
})