const router = require('express').Router();
const { auth } = require('../../controllers');

router.post('/', auth.createUser);

module.exports = router;
