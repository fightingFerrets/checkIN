// const pages = require('./pages');
// const message = require('./message');
const router = require("express").Router();
var tiwlioController = require('../../controllers/twilioController');


router.route("/")
    .post(tiwlioController.sendSms);


module.exports = router;