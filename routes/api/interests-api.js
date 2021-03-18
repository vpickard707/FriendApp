const router = require("express").Router();
const interestsController = require("../../controllers/interestsController");


// Matches with "/api/interests"
router.route("/")
  .get(interestsController.findAll)
  .post(interestsController.create)
  .post(interestsController.seed);

// Matches with "/api/interests/:id"
router
  .route("/:id")
  .get(interestsController.findById)


module.exports = router;