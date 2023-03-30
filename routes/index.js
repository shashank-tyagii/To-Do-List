const express= require ('express');
const router = express.Router();


const HomeController = require('../controllers/home_page_controller');

router.get('/' , HomeController.home);



// Exporting this to be available/use at main index.js file 
module.exports = router; 