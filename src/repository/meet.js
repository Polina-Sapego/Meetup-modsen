const meeting = require("../models/meet");


class meetingRepository {


  async create(meetingInf){
    return await meeting.create(meetingInf)
  }

  async update(id, meetingData){
    return await meeting.update (meetingData,{where: {id}});
  }

  async delete(id){
    return await meeting.destroy({where:{id}});
  }

}

module.exports = new meetingRepository();
