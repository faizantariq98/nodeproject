const express=require('express');
const userController=require('../controllers/userController');
const router = express.Router();
const midleware= require('../middleware/auth')

router.get('/',midleware.authenticate,midleware.authorize('admin'),userController.getUsers);
router.get('/:id',midleware.authenticate,midleware.authorize('admin'),userController.getUserbyID);
router.post('/:id',midleware.authenticate,midleware.authorize('admin'),userController.saveuser)

module.exports=router;