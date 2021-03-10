const router = require('express').Router();
const ctrl = require('../controllers');
const passport = require('passport');

router.get('/test', ctrl.transactionAccount.test);
router.post('/create', passport.authenticate('jwt', { session: false }), ctrl.transactionAccount.create);

module.exports = router;