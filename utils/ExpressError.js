// class ExpressError extends Error {
//         constructor(statusCode, message) {
//         super() ;
//         this. statusCode = statusCode;
//         this.message = message;
//     }
// }
// module.exports = ExpressError;

class ExpressError extends Error {
    constructor(statusCode, message) { // Use lowercase 's'
        super();
        this.statusCode = statusCode;  // Use lowercase 's'
        this.message = message;
    }
}
module.exports = ExpressError;