const { json } = require('express');
const fs = require('fs');
const User = require('../models/User')
class Userrepo{
    constructor(){
        this.users=[];
       
    }
   
   async getuserbyId(id){
        let user=[];
        try{
        user =await User.findById(id);
    } 
        catch(ex){
            console.log("users=getByid",ex);
        } 
        return user;

    }
   async getuserbyEmail(email){
        let user= await User.findOne({email:email});
        return user;
    }
  async saveuser(user){
        try{
            let newUser=new User({
                name:user.name,
                email:user.email,
                password:user.password,
                role:user.role
            })

            return await newUser.save();
        }catch(ex){
            console.log("Save User exception",ex)
        }
    }

   async getAllUsers(){
        return await User.find();
    }
}

module.exports=Userrepo;