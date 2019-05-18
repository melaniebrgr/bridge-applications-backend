const database = require("../../db");
const Cohorts = require("./cohorts.model");

exports.list = async (req, res, next) => {
  try {
    res.json(await Cohorts.listCohorts());
  } catch (error) {
    next(error);
  }
};
