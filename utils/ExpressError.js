// class ExpressError extends Error {
//         constructor(statusCode, message) {
//         super() ;
//         this. statusCode = statusCode;
//         this.message = message;
//     }
// }
// module.exports = ExpressError;

class ExpressError extends Error{
    constructor(StatusCode, message){
        super();
        this.StatusCode = StatusCode;
        this.message = message;
    }
}
module.exports = ExpressError;