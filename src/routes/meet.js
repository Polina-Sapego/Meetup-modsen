const express = require("express");
const meetingController = require("../controllers/meet");
const validate = require('../middleware/validate');
const meetScheme = require('../schemes/meet');

const router = express.Router();


router.post('/',validate(meetScheme.createmeetScheme), meetingController.createmeeting
);
router.put("/:id",validate(meetScheme.updatemeetScheme),meetingController.updatemeeting
);
router.delete("/:id", meetingController.deletemeeting
);


// router.get("/", meetingController.listUniversity
// );
// router.get("/:id", meetingController.findUniversityById
// );


module.exports = router;