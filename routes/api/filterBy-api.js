const router = require("express").Router();
const filterByController = require("../../controllers/filterByController");
const interestsController = require("../../controllers/filterByController");


// Matches with "/api/interests"
router.route("/")
  .get(filterByController.findAll)
  .post(filterByController.create)
  .post(filterByController.seed);

// Matches with "/api/interests/:id"
router
  .route("/:id")
  .get(filterByController.findById)


module.exports = router;