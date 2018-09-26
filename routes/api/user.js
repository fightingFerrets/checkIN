const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.create);

router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update);

module.exports = router;