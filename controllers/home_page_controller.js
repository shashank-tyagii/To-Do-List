
// Views folder is already set on the main Index file
module.exports.home = function (req,res){             // Module.exports because we want to send this function to route when home page route is requested
    return res.render('homePage', {
     title: "To-Do List ",
     todoList : ""
 });
 }