

class ConnectionRequestsService 
{


   constructor(connectionRequestsRepository)
   {
      this.connectionRequestsRepository = connectionRequestsRepository

   }


   async createConnection(fromId,toId,status)
   {

      const connection = await this.connectionRequestsRepository.createConnection(fromId,toId,status)

      return connection


   }


   async reviewConnection(id,status)
   {

      const result = await this.connectionRequestsRepository.reviewConnection(id,status)

      return result


   }






}


module.exports = ConnectionRequestsService