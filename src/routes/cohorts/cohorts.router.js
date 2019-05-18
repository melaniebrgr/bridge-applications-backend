const express = require("express");
const cohortsController = require("./cohorts.controller");

const router = express.Router();

router.get("", cohortsController.list);
router.get("/:id", cohortsController.get);

module.exports = {
  cohortsRouter: router
};
