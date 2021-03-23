const router = require("express").Router();
const userController = require("../../controllers/userController")

router.route("/:username")
.post(userController.updateByName)

module.exports = router;