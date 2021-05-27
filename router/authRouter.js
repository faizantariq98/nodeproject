// const express= require('express');
// const authController= require('../controllers/authController')
// const router=express.Router();

// router.post('/login',authController.login);
// module.exports=router;


const express= require('express')
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login',authController.login);
module.exports=router;