const router = require("express").Router();
const userRoutes = require("./user");

router.use("/articles", userRoutes);

module.exports = router;