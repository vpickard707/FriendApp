const router = require("express").Router();
const profileRoutes = require("./profileapi");

// profile routes
router.use("/profile", profileRoutes);

module.exports = router;
