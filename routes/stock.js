const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/test", ctrl.stock.test);
router.get("/", ctrl.stock.getAll);
router.delete("/delete/all", ctrl.stock.deleteAll);

module.exports = router;