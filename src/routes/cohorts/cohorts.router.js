const express = require("express");
const cohortsController = require("./cohorts.controller");

const router = express.Router();

router.get("", cohortsController.list);
router.post("", cohortsController.create);
router.get("/:id", cohortsController.get);
router.get("/:id/questions", cohortsController.getQuestionsForCohort);
router.put("/:id", cohortsController.update);

module.exports = router;
