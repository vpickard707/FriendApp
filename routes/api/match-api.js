const router = require("express").Router();
const matchController = require("../../controllers/matchController");


// Matches with "/api/interests"
router.route("/")
  .get(matchController.findAll)
  .post(matchController.doubleEntry);

router.route("/:username")
  .get(matchController.findByName)

module.exports = router;