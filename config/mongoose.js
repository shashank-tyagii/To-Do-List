// Import ODM - Mongoose library/framework to interact with MongoDB from NodeJS file
const mongoose = require('mongoose');

// connect to locally running instance of MongoDB.
const conn = mongoose.connect('mongodb://127.0.0.1:27017/to_do_list_db')
conn.catch(err => console.log(err));

// After connection, to get access to database
var db = mongoose.connection;

// When there is a error in connection
db.on('error', function(err) { console.log(err.message); });

// If there's no error and connection is made successfully
db.once('open', function(){
    console.log('Successfully connected to database');
});