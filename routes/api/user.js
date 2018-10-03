const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.findAll)
    .post(userController.create)
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .post(userController.create)

router
    .route("/sms")
    .post(userController.create)

router
    .route("/does-exist/:id")
    .get(userController.doesExist)

module.exports = router;