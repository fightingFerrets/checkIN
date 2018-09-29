const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route.get("/yes", function (req, res) {
    res.setHeader("Content-Type", "text/plain")
    res.end("hello there");
});

router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .post(userController.create)

module.exports = router;