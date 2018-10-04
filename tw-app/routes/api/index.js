const router = require("express").Router();
const dummyRoutes = require("./dummies");

// Book routes
router.use("/dummy", dummyRoutes);

module.exports = router;