const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

const meetRouter=require("../routes/meet")

//const routes = require('../routes/');

//const Express = require("./express");



//router.use(Express);

//router.use(routes);

router.use(bodyparser.json());

router.use("/meetup",meetRouter);//



module.exports = router;