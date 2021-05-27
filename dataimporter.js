const connectDB=require('./config/db');
 connectDB();
const fs = require('fs');
const User=require('./models/User')
const Post = require('./models/Post');


const users=JSON.parse(fs.readFileSync(`${__dirname}/user.json`,'utf-8'));
const posts= JSON.parse(fs.readFileSync(`${__dirname}/post.json`,'utf-8'));
const importdata= async()=>{
    try{
        await User.create(users);
        console.log("after create users");
        let userresult= await User.find()
        console.log("The results of Users",userresult);

        await Post.create(posts);
        console.log("after create posts");
        let postresult = await Post.find();
        console.log("The result of Post",postresult);

    }catch(ex){
        console.log(ex)
    }
}
const deletedata= async()=>{
    try{
        await User.deleteMany()
        console.log("after delete user")
        let userresult= await User.find()
        console.log(userresult)

        await Post.deleteMany();
        console.log("after delete Post");
        let postresult= await Post.find();
        console.log(postresult);
    }catch(ex){
        console.log("error deleting file",ex)
    }
}
if(process.argv[2]=== '-i'){
    importdata()
}else if(process.argv[2]=== '-d'){
    deletedata();
}