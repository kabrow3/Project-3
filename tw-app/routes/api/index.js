const router = require("express").Router();
const auth = require('./auth');
const route = require('./route');

// /api/auth
router.use('/auth', auth);
router.use('/route', route);

module.exports = router;