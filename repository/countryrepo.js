const fs = require('fs');
const Country=require('../models/country')
class countryrepo{
    constructor(){
       
    }
    async getallusers(){
        return await Country.find();
    }
}
module.exports=countryrepo;