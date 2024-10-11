const BaseError= require("./BaseError")

class AuthError extends BaseError{


     constructor()
     {

        super("Authorization Error","Please  login again")

     }



}


module.exports = AuthError