const fs= require('fs');
const { parse } = require('path');
const { stringify } = require('querystring');
const urepo=require('../repository/userrepository');
// const User=require('../models/User')
module.exports={
    getUsers:async (req,res)=>{
        // // let users=new User(1,"Faizan","Rawalpindi");
        // let usersting=JSON.parse(fs.readFileSync(`${__dirname}/../user.json`,'utf-8'));
    
        // usersting.forEach(element => {
            const userrepoinst= new urepo();
            res.json(await userrepoinst.getAllUsers());
        //     res.json({
        //         id:element.id,
        //         name:element.name,
        //         city:element.city
        //     })
        // });

        // res.json(usersting)
        // const users=usersting.map(el=>{
        //     return el;
        // });
        // res.json(users)
    },
    getUserbyID:async (req,res)=>{
        // console.log("recieved request with param",req.params);
        // // let users=new User(1,"Faizan","Rawalpindi");
        // const usersting=JSON.parse(fs.readFileSync(`${__dirname}/../user.json`,'utf-8'));

        // const userdata=usersting[req.params.id];
        // // const users=userdata.map(el=>{
        // //     return el;
        // // });

        //      res.json(userdata);
        const userrepoinst= new urepo();
        const x= req.params.id;
        res.json(await userrepoinst.getuserbyId(x));
    },
    saveuser:(req,res)=>{
        const userrepo = new urepo();
        userrepo.saveuser(req.body);
        res.json("saved");

    }
};