const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/yes").get(function (req, res) {
    res.setHeader("Content-Type", "text/plain")
    res.send("hello there");
});

router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .post(userController.create)

module.exports = router;