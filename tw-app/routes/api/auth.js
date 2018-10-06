const router = require('express').Router();
const { auth } = require('../../controllers');

// POST /api/auth/signup
router.post('/signup', auth.createUser);

// POST /api/auth/signin
router.post('/signin', auth.authenticateUser);

module.exports = router;
