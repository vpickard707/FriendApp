const { authJwt } = require("../../middleware");
const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// Matches with "/api/profile"
router.route("/")
  .get(profileController.findAll)
  .post(profileController.create);

router.route('/filter')
  .get(profileController.filter)
router.route('/matches')
  .get(profileController.findMatch)

router.route("/:username")
  .get(profileController.findByName)
  .post(profileController.updateByName);
  

module.exports = router;