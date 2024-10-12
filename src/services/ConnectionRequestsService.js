

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



   async fetchConnection(fromId,toId)
   {

     const connection = await this.connectionRequestsRepository.fetchConnection(fromId,toId)

     return connection

   }


   async getMatches(id)
   {

      return await this.connectionRequestsRepository.getMatches(id)

   }


   async getRequests(id)
   {

     return await this.connectionRequestsRepository.getRequests(id)

   }


}


module.exports = ConnectionRequestsService