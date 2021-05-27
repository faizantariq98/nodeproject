const express = require('express');
const app=express();
const userRouter=require('./userRouter')
const port = 30001;


app.use(express.json());
app.use('/user',userRouter);

 app.get('/',(req,res,next)=>{
     res.send('This iis first page');
 })
 app.listen(port,()=>{
     console.log("listensing on Port "+ port);
 })
