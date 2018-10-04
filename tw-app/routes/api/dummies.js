const router = require("express").Router();
const dummiesController = require("../../controllers/dummyController");

// Matches with "/api/dummy/"
router.route("/")
  .get(dummiesController.findAll);

// Matches with "/api/dummy/:id"
router
  .route("/:id")
  .get(dummiesController.findById);

module.exports = router;