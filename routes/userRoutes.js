const express=require('express');
const { loginController, registerController } = require('../controllers/userCtrl');

// Router object 
const router=express.Router();


// login || post
router.post('/login',loginController);
// register || post
router.post('/register',registerController);



module.exports=router;