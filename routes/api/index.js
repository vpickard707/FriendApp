const router = require("express").Router();
const profileRoutes = require("./profile-api");
const interestsRoutes = require("./interests-api");
const filterByRoutes = require("./filterBy-api");

// profile routes
router.use("/profile", profileRoutes);

//interests routes
router.use("/interests", interestsRoutes);

//filterBy routes
router.use("/filters", filterByRoutes);

module.exports = router;
