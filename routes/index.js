const express=require('express');
const home_controller=require("../controllers/home_controller")
const create_controller=require('../controllers/create_controller');
const delete_controller=require('../controllers/delete_controller')


const router=express.Router();
router.get('/',home_controller.home);

router.post('/create-todo',create_controller.create)
router.post('/delete-todo',delete_controller.delete)
module.exports=router;