const zod = require("zod")
const {signUpSchema} = require("../dto/userSchema")

async function signupValidator(req,res,next)
{
    try{
    const user = req.body

     signUpSchema.parse(user)
     next()
    }
    catch(err)
    {
        next(err)
    }

}


module.exports = signupValidator