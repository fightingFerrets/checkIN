const router = requier("express").Router();
const userRoutes = require("./user");

ruter.use("/articles", userRoutes);

module.exports = router;