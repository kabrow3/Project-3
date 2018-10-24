const router = require("express").Router();
const route = require('./route');

// /api/route/...
router.use('/route', route);

module.exports = router;