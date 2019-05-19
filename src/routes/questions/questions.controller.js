const database = require("../../db");
const Questions = require("./questions.model");

exports.getAllQuestions = async (req, res, next) => {
  try {
    res.json(await Questions.getAllQuestions());
  } catch (error) {
    next(error);
  }
};

exports.getQuestionById = async (req, res, next) => {
  try {
    res.json(await Questions.getQuestionById(req.params.id));
  } catch (error) {
    next(error);
  }
};
