const database = require("../../db");
const Questions = require("./questions.model");

exports.getAllQuestions = async (req, res, next) => {
  try {
    res.json(await Questions.getAllQuestions());
  } catch (error) {
    next(error);
  }
};
