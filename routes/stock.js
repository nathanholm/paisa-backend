const router = require('express').Router();
const ctrl = require('../controllers/');

// routes
router.get('/', ctrl.stock.index);
router.get('/:id', ctrl.stock.show);
router.post('/', ctrl.stock.create);
router.put('/:id', ctrl.stock.update);
router.delete('/:id', ctrl.stock.destroy);

// exports
module.exports = router;