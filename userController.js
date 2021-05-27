module.exports={
    getUser:(req,res)=>{
        let user={
            id:0,
            name:"faizan",
            city:"Wah"
        }
        res.json(user)
    },
    getUserbyid:(req,res)=>{
        let user={
            id:0,
            name:"faizan",
            city:"Wah"
        }
    },
    saveUser:(req,res)=>{
        console.log(req.body);
        res.send(ok)
    }
}