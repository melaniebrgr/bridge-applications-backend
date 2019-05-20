const database = require("../../db");
const Cohorts = require("./cohorts.model");

exports.list = async (req, res, next) => {
  try {
    res.json(await Cohorts.listCohorts());
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    res.json(await Cohorts.insertCohort(req.body));
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

exports.update = async (req, res, next) => {
  try {
    res.json(await Cohorts.updateCohortById(req.params.id, req.body));
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    res.json(await Cohorts.deleteCohortById(req.params.id));
  } catch (error) {
    next(error);
  }
};

exports.getQuestionsForCohort = async (req, res, next) => {
  try {
    res.json(await Cohorts.getQuestionsForCohort(req.params.id));
  } catch (error) {
    next(error);
  }
};
