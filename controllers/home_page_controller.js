const ToDo = require('../models/ToDoSchema');

// Views folder is already set on the main Index file
module.exports.home = function (req,res){             // Module.exports because we want to send this function to route when home page route is requested
    // fetching using mongoose
      ToDo.find({}).then(function(todo){

        return res.render('homePage',{
            title:"Home",
            todoList:todo
      }) 
    })
 }

 module.exports.createTodo = function(req,res){
    ToDo.create({ // crating new todo and storing into DB
        'description':req.body.desc,
        'category':req.body.category,
        'date': req.body.dateValue
    }).then(function(newArr){
        return res.redirect('/') ;
    })
}

module.exports.deleteTodo = function(req,res){
    id = req.query.id; // getting the id from ui
    newsp = id.split(','); 
    for(let i=0;i<newsp.length;i++){ // looping over newsp  to delete all the checked value
        ToDo.findByIdAndDelete(newsp[i]).then(function(){
            //return res.redirect('/');
        })
    }
    return res.redirect('/');
   
}
