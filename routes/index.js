const { authJwt } = require("../middleware");
const router = require("express").Router();
const apiRoutes = require("./api");


// API Routes
router.use("/api", [authJwt.verifyToken], apiRoutes);

module.exports = router;