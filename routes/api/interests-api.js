const router = require("express").Router();
const interestsController = require("../../controllers/interestsController");


// Matches with "/api/interests"
router.route("/")
  .get(interestsController.findAll)
  .post(interestsController.create)


module.exports = router;