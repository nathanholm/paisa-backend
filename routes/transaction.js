const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/test", ctrl.transaction.test);
router.get("/", ctrl.transaction.getAll);
router.delete("/delete/all", ctrl.transaction.deleteAll);

module.exports = router;