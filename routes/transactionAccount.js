"use strict";
const router = require("express").Router();
const ctrl = require("../controllers");
const passport = require("passport");

router.get("/test", ctrl.transactionAccount.test);
router.post("/create", passport.authenticate("jwt", { session: false }), ctrl.transactionAccount.create);
router.delete("/delete/all", ctrl.transactionAccount.deleteAll);

module.exports = router;