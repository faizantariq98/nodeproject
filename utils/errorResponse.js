// class Response extends Error{
//     constructor(msg,statuscode){
//         super(msg);
//         this.statuscode=statuscode;
//     }
// }
// module.exports=Response;


class ErrorResponse extends Error{
    constructor(msg,statuscode){
        super(msg);
        this.statuscode=statuscode;
    }
}

module.exports=ErrorResponse;