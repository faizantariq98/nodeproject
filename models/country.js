const mongoose= require('mongoose');

const countryschema= mongoose.Schema({
    title:{
        type:String,
    },
    body:{
        type:String
    }
})

module.exports=mongoose.model("Country",countryschema,"country");