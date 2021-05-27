const express= require ('express');
const postController = require('../controllers/postController');
const midleware= require('../middleware/auth')
const router=express.Router();

router.get('/',midleware.authenticate,postController.getposts);
router.get('/:id',midleware.authenticate,postController.getpostbyID);
router.post('/',midleware.authenticate,postController.createPost);
router.delete('/:id',midleware.authenticate,postController.deletePost);
router.put('/:id',midleware.authenticate,postController.updatePost);
module.exports=router;