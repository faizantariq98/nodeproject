const mongoose= require('mongoose');
const appconstant =require('../constants/appconstants')
const connect = async ()=>{
    try{
       const connector= await mongoose.connect(appconstant.mongodb.connectionstring,{
            useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true
        });
            console.log("conected to database",connector.connection.host);
    }catch(ex){
        console.log(ex)
    }
}
module.exports=connect;