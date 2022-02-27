const express=require('express');
const home_controller=require("../controllers/home_controller")
const create_controller=require('../controllers/create_controller')

const router=express.Router();
router.get('/',home_controller.home);

router.post('/create-todo',create_controller.create)
module.exports=router;