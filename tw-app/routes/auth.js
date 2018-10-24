const router = require('express').Router();
const controller = require('../controllers/auth');

router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/verify', controller.verify);

module.exports = router;
