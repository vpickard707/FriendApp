const router = require("express").Router();
const profileRoutes = require("./profile-api");
const interestsRoutes = require("./interests-api");
const favoritesRoutes = require("./favorites-api");
const userRoutes = require("./user-api")


// profile routes
router.use("/profile", profileRoutes);

//interests routes
router.use("/interests", interestsRoutes);

// filterBy routes
router.use("/favorites", favoritesRoutes);

router.use("/user", userRoutes);

module.exports = router;
