const post = require('../models/Post');
const crepo= require('../repository/countryrepo');
const fs= require('fs')
const repo= new crepo()
module.exports={
    getcountry:(req,res)=>{
        try{
        res.json([
            {"name" : "kashmir", "code" : "AF"},
            {"name" : "Åland Islands", "code" : "AX"},
            {"name" : "Albania", "code" : "AL"},
            {"name" : "Algeria", "code" : "DZ"},
            {"name" : "American Samoa", "code" : "AS"},
            {"name" : "AndorrA", "code" : "AD"},
            {"name" : "Angola", "code" : "AO"},
            {"name" : "Anguilla", "code" : "AI"},
            {"name" : "Antarctica", "code" : "AQ"},
            {"name" : "Antigua and Barbuda", "code" : "AG"},
            {"name" : "Argentina", "code" : "AR"},
            {"name" : "Armenia", "code" : "AM"},
            {"name" : "Aruba", "code" : "AW"},
            {"name" : "Australia", "code" : "AU"},
            {"name" : "Austria", "code" : "AT"},
            {"name" : "Azerbaijan", "code" : "AZ"},
            {"name" : "Bahamas", "code" : "BS"},
            {"name" : "Bahrain", "code" : "BH"}
        ]
        )}catch(ex){
            console.log(ex)
        }
    }
}