const express=require('express')
const userController=require('./userController')
const router=express.Router();


router.get('/',userController.getUser);
router.get('/:userId',userController.getUserbyid);
router.post('/:userId',userController.saveUser);
module.exports=router;