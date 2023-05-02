const  meeting= require("../repository/meet");
const NotAcceptableError = require("../errors/NotAcceptableError");


class meetingService {


  async createmeeting(meetingInf){
    return await meeting.create(meetingInf)
  }

  async updatemeeting(id, meetingData){
    const res =await meeting.update(id,meetingData);
    if (res){
      return res;
    }
    else{
      throw new NotAcceptableError("ID doesn't find");
    }
  }

  async deletemeeting(id){
    const res =await meeting.delete(id);
    if (res){
      return res;
    }
    else{
      throw new NotAcceptableError("ID doesn't find");
    }
  }

}

module.exports = new meetingService();
