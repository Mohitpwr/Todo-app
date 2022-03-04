const express=require('express');
//accessing our controller actions path
const home_controller=require("../controllers/home_controller")
const create_controller=require('../controllers/create_controller');
const delete_controller=require('../controllers/delete_controller')

//router setup
const router=express.Router();
//home page
router.get('/',home_controller.home);

//create task and saving it to database
router.post('/create-todo',create_controller.create)

//for deletion of todo tasks
router.post('/delete-todo',delete_controller.delete)

module.exports=router;