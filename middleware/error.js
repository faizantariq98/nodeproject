// const ErrorResponse= require('../utils/errorResponse');
// const errorhandler=(err,req,res,next)=>{
//     let error={...err};
//     console.log(err.message);
//     res.status(err.statusCode|| 500).json({
//         success:false,
//         error:err.message||'internal server error'
//     })
// }
// module.exports=errorhandler;

const ErrResponse= require('../utils/errorResponse');

const errorhandler=(err,req,res,next)=>{
    let error={...err};
    console.log(err);
    res.status(err.statusCode || 500).json({
        success:false,
        error:err.message || "internal service error"
    })

}
module.exports=errorhandler;