const zod = require("zod")


const signUpSchema = zod.object({
  
   username : zod.string(),
   firstName : zod.string(),
   lastName : zod.string().optional(),
   email : zod.string().email({message : "Please enter a valid email"}),
   password : zod.string().min(8),
   age : zod.number().optional(),
   gender : zod.enum(["Male","Female","Other"]),
   bio : zod.string().optional(),
   photoUrl : zod.string().url().optional(),
   skills : zod.array(zod.string()).optional()

})

const loginSchema = zod.object({

   email : zod.string().email(),
   password : zod.string()
})


const updateSchema = zod.object({

    firstName : zod.string().optional(),
    lastName : zod.string().optional(),
    age : zod.number().optional(),
    gender : zod.string().optional(),
    photoUrl: zod.string().optional(),
    bio : zod.string().optional(),
    skills : zod.array(zod.string()).optional()

}).strict()


const updatePasswordSchema = zod.object({

   currentPassword : zod.string(),
   newPassword : zod.string()

}).strict()


module.exports = {

  signUpSchema,
  loginSchema,
  updateSchema,
  updatePasswordSchema

}