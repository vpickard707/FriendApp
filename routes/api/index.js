const router = require("express").Router();
const profileRoutes = require("./profile-api");
const interestsRoutes = require("./interests-api");

// profile routes
router.use("/profile", profileRoutes);

//interests routes
router.use("/interests", interestsRoutes);

module.exports = router;
