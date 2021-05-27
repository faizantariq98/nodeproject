const fs = require('fs');
const Post=require('../models/Post')
class Postrepo{
    constructor(){
       
    }

    
    async getallusers(){
        return await Post.find();
    }
    async getpostbyId(id){
        let post= await Post.findById(id)
        return post;

    }
    async createPost(post){
        let response={
            success:false,
            error:{}
        };
        try{
            let newPost=new Post({
                title:post.title,
                body:post.body
            });
            await newPost.save();
            response.success=true
        }catch(ex){
            response.success=false;
            response.error=ex
        }
        return response;
    }
    async updatePost(postId,postData){
        let response = {
            success:false,
            error:{}
        };
        try{
            const post= Post.findById(postId)
            if(post){
                await Post.findByIdAndUpdate(postId,{title:post.title,body:post.body},{new:true})
                response.success=true;
            }
            else(
                response.error("Post Not found")
            )
        }catch(ex){
            response.success=false;
            response.error=ex;
        }
        return response;

    }
    async deletePost(postId){
        let response = {
            success:false,
            error:{}
        };
        try{
            const post= Post.findById(postId)
            if(post){
                await post.remove()
                response.success=true;
            }
        }catch(ex){
            response.success=false;
            response.error=ex;
        }
        return response;
    }
}


module.exports=Postrepo;