const router = require("express").Router();
const userController = require("../../controllers/userController");

<<<<<<< HEAD
router.route("/", function (req, res) {
    res.setHeader("Content-Type", "text/plain")
    res.end("hello there");
});

=======
router.route("/")
    .get(userController.findAll)
    .post(userController.create)
>>>>>>> 9f9c90e03deea595bb1845d391328bf06467f80e
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .post(userController.create)

router
    .route("/sms")
    .post(userController.create)

module.exports = router;