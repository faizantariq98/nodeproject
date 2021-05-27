const mongoose= require('mongoose');

const Postschema= mongoose.Schema({
    title:{
        type:String,
    },
    body:{
        type:String
    }
})

module.exports=mongoose.model("Post",Postschema,"posts");