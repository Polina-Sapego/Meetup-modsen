const meetingService = require("../services/meet");
const Response = require("../helpers/response");



class meetingController {


  async createmeeting(req,res,next){
    try{
    const meeting=req.body;
    await meetingService.createmeeting(meeting)
    res.json(new Response("meeting created", 200));
    }
    catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async updatemeeting(req,res,next){
    try{
      const meetingId = req.params.id;
      const meeting=req.body;
      await meetingService.updatemeeting(meetingId,meeting)
      res.json(new Response("meeting update", 200));
      }
      catch (err) {
        console.log(err);
        return next(err);
      }
  }


  async deletemeeting(req,res,next){
  try {

      const meetingId = req.params.id;
    

        await meetingService.deletemeeting(meetingId);

        res.json(new Response("Delete meeting", 200));
        
      } 
    catch (err) {
      console.log(err);
      return next(err);
    }
  }




}

module.exports = new meetingController();