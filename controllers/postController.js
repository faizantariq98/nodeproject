const post = require('../models/Post');
const prepo= require('../repository/postrepsitory');
const fs= require('fs')
const repo= new prepo()
module.exports={
    getposts:async(req,res)=>{
        // let posts = new post(1,"faizan product","rawalpindi")
        // let usersting=JSON.parse(fs.readFileSync(`${__dirname}/../post.json`,'utf-8'));
        // res.json(usersting); 
        // console.log(prepo)
        let post= await repo.getallusers()
        console.log(post)
        res.json(post)
    },
    getpostbyID:async (req,res)=>{
        const id=req.params.id;
        let post=await repo.getpostbyId(id);
        res.json(post);
    },
    deletePost:async (req,res,next)=>{
        const id=req.params.id;
        let response=await repo.deletePost(id);
        res.json(response);
    },
    createPost:async (req,res,next)=>{
        let {title,body}=req.body;
        let response=await repo.createPost({title,body});
        res.json(response);
    },
    updatePost:async (req,res,next)=>{
        const id=req.params.id;
        let {title,body}=req.body;
        let response=await repo.updatePost(id,{title,body});
        res.json(response);
    }


}