const router = require("express").Router();
const favoritesController = require("../../controllers/favoritesController");


// Matches with "/api/interests"
router.route("/")
  .get(favoritesController.findAll)
  .post(favoritesController.create);

router.route("/:username")
  .get(favoritesController.findByName);

  module.exports = router;