const express= require('express')
const router = express.Router();
const countryController = require('../controllers/countryController');

router.get('/',countryController.getcountry);
module.exports=router;