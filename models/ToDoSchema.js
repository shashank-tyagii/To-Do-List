const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }

})

// Define collection for this schema
const ToDo = mongoose.model('ToDo', ToDoSchema);

// Export this file 
module.exports = ToDo;