const database = require("../../db");
const Cohorts = require("./cohorts.model");

exports.list = async (req, res, next) => {
  try {
    res.json(await Cohorts.listCohorts());
  } catch (error) {
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    res.json(await Cohorts.getCohortById(req.params.id));
  } catch (error) {
    next(error);
  }
};