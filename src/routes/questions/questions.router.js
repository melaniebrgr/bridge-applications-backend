const express = require("express");
const questionsController = require("./questions.controller");

router = express.Router();

router.get("", questionsController.getAllQuestions);
router.get("/:id", questionsController.getQuestionById);

module.exports = router;
