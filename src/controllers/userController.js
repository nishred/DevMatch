const UserRepository = require("../repositories/userRepository")

const UserService = require("../services/userService")

const {StatusCodes} = require("http-status-codes")

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

const AuthError = require("../errors/AuthError")
const ResourceNotFoundError = require("../errors/ResourceNotFoundError")
const { JWT_PASS } = require("../config/serverConfig")



const userService = new UserService(new UserRepository())


async function createUser(req,res,next)
{

    try {

    const user = req.body;

    const nextUser = await userService.createUser(user)

    res.status(StatusCodes.CREATED).json({
      success : "ok",
      message : "user created successfully",
      data : user,
      error : {}
    })

    }
    catch(err)
    {
       next(err)

    }
  }


  async function login(req,res,next)
{
    try{
   const data = req.body;

   const user = await userService.getUser({email : data.email})

   if(!user)
    throw new ResourceNotFoundError("user",{email : data.email})

   const validationResponse = await bcrypt.compare(data.password,user.password)


   if(!validationResponse)
    throw new AuthError()


   const token = await jwt.sign({_id : user._id},JWT_PASS)

   res.cookie("token",token)

   res.status(StatusCodes.ACCEPTED).json({

       success : "ok",
       message : "Login successfull",
       data : user.username

   }) 


   }
   catch(err)
   {
      next(err)

   }

}



async function getAllUsers(req,res,next)
{

   try 
   {

      const users = await userService.getAllUsers()

      res.status(StatusCodes.ACCEPTED).json({

        success : "ok",
        message : "Retrieved all the users successfully",
        data : users,
        error : {}
      })

   }
   catch(err)
   {
    next(err)
   }



}


async function getUser(req,res,next)
{
   
    try{
   const {_id} = req;


   const user = await userService.getUser({_id : id})


    }
    catch(err)
    {
        next(err)
    }


}


   async function updateUser(req,res,next)
   {

      try {

      const data = req.body;

      const {_id} = req

      const user = await userService.updateUser(_id,data)

      res.status(StatusCodes.ACCEPTED).json({

  
        success : "ok",
        message : "Profile updated successfully",
        data : user

      })


      }
      catch(err)
      {
   
          next(err)

      }



   }



   async function updatePassword(req,res,next)
   {

    try{
      const user = await userService.updatePassword(req._id,req.body)

      res.status(StatusCodes.ACCEPTED).send({
         success : "ok",
         message : "The password has been updated successfully",
         data : user
      })

    }
    catch(err)
    {
        next(err)
    }

   }





module.exports = {createUser,login,getAllUsers,getUser,updateUser,updatePassword}

