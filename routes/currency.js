const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/test", ctrl.currency.test);
router.get("/", ctrl.currency.getCurrencies);
router.delete("/delete/all", ctrl.currency.deleteAll);

module.exports = router;