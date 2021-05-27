const mongoose=require('mongoose');
const bcrypt = require('bcryptjs')
const Userschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    role:{
        type:String
    },
    createdon:{
        type:String,
        default:Date.now()
    }
});

Userschema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt =  await bcrypt.genSalt(10);
    console.log('generated salt', salt)
    console.log('generated password', this.password)
    this.password= await bcrypt.hash(this.password,salt);
    console.log(this.password);
});
Userschema.methods.matchPassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports=mongoose.model("User",Userschema,"users");