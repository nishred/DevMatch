const ResourceNotFoundError = require("../errors/ResourceNotFoundError")
const User = require("../models/User")

class userRepository {


  async addUser(user)
  {
     const nextUser = await User.create(user)
     return nextUser
  }
  
  async getUser(filter)
  {
  
    const user = await User.findOne(filter)
    if(!user)
    throw new ResourceNotFoundError("user",filter)
    return user

}


async getUsers()
{

  const users = await User.find()

  return users
      
}

async updateUser(id,data)
{
   const user = await User.updateOne({_id : id},{$set : {...data}})
   
   return user


}
  


}

module.exports = userRepository