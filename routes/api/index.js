const router = require("express").Router();
const profileRoutes = require("./profile-api");

// profile routes
router.use("/profile", profileRoutes);

module.exports = router;
