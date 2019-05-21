const express = require("express");
const cohortsController = require("./cohorts.controller");

const router = express.Router();

router.get("", cohortsController.list);
router.post("", cohortsController.create);
router.get("/:id", cohortsController.get);
router.put("/:id", cohortsController.update);
router.delete("/:id", cohortsController.delete);
router.get("/:id/questions", cohortsController.getQuestionsForCohort);
router.get("/:id/applications", cohortsController.getApplicationsForCohort);

module.exports = router;
