const express= require ('express');
const router = express.Router();


const HomeController = require('../controllers/home_page_controller');

router.get('/' , HomeController.home);
router.post('/create_todo',HomeController.createTodo) //controller for creating todo list
// router.post('/delete_todo',HomeController.deleteTodo) // controller for deleting the todo list
// router.get('/editdata',HomeController.EditPage)       // controller for getting Edit page
// router.post('/edit-todolist',HomeController.editDetails) // conteoller for Edting todo list


// Exporting this to be available/use at main index.js file 
module.exports = router; 