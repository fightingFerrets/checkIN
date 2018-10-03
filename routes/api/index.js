const router = require("express").Router();
const userRoutes = require("./user");
const twilioRoutes = require("./twilio");

router.use("/user", userRoutes);
router.use("/sms", twilioRoutes);
module.exports = router;