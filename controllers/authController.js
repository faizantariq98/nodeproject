// const Errorresponse=require('../utils/errorResponse');
// const userrepo=require('../repository/userrepository');
// const jwt= require('jsonwebtoken');
// const userRepo= new userrepo(); 
// module.exports={
//     login:(req,res,next)=>{
//         const {email,password}=req.body;
//         if(!email||!password){
//             return next(new Errorresponse("Email Pasword are required",400));
//         }
//         let user=userRepo.getuserbyEmail(email);
//         if(!user){
//             return next(new Errorresponse("Invalid credentials",401));
//         }
//         if (password != user.password){
//             return next(new Errorresponse("Invalid credentials",401));
//         }
//         let token=jwt.sign({email: user.email}, "thisissecretkey@123",{
//             expiresIn:"1h"
//         })

//         res.json({
//             success:true,
//             token
//         })
//     }
// }

const ErrResponse = require('../utils/errorResponse');
const userRepository = require('../repository/userrepository');
const jwt=require('jsonwebtoken');
const constant= require('../constants/constant')
const userrepos=new userRepository();
module.exports={
    login:async (req,res,next)=>{

        const {email,password} =req.body;
        if(!email || !password){
            return next(
                new ErrResponse("Email and Password are requied",400));
            }

        let user=await userrepos.getuserbyEmail(email)
            if(!user){
                return next(new ErrResponse("Email not found or registered",401));
            }
        if(!user.matchPassword(password)){
            return next(new ErrResponse("Password dont match",401));
        }
        let token=jwt.sign({"email":user.email},constant.jwtkey,{
            expiresIn:'1h'
        })

        res.json({
            success:true,
            token
        })
        }
    }
