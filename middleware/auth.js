const errorResponse=require('../utils/errorResponse')
const jwt=require('jsonwebtoken');
const constant =require('../constants/constant')
const userRepos= require('../repository/userrepository')
const urepo=new userRepos();
module.exports={
    authenticate:async (req,res,next)=>{
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token=req.headers.authorization.split(' ')[1]
        }
        if(!token){
            return next(new errorResponse("unauthorized token",401))
        }
        try{
            const decode=jwt.verify(token,constant.jwtkey);
            req.user=await urepo.getuserbyEmail(decode.email)
        }catch(ex){
            return next(new errorResponse("Unauthorized token",500))
        }
        next();
    },
    authorize:(...roles)=>{
        return (req,res,next)=>{
            if(!roles.includes(req.user.role)){
                return next(new errorResponse("role not found",400))
            }
            next();
        }
    }
}