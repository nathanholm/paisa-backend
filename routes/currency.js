const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/test", ctrl.currency.test);
router.get("/", ctrl.currency.getAll);
router.delete("/delete/all", ctrl.currency.deleteAll);

module.exports = router;