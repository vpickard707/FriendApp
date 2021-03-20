const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// Matches with "/api/profile"
router.route("/")
  .get(profileController.findAll)
  .post(profileController.create);

// Matches with "/api/profile/:id"
// router
//   .route("/:id")
//   .get(profileController.findById)
//   .put(profileController.update)
//   .delete(profileController.remove);

router.route('/filter')
  .get(profileController.filter)

router.route("/:username")
  .get(profileController.findByName)
  .post(profileController.updateByName);
  

module.exports = router;