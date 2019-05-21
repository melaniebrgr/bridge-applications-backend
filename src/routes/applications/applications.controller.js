const database = require("../../db");
const Applications = require("./applications.model");

exports.list = async (req, res, next) => {
  try {
    res.json(await Applications.listApplications());
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    res.json(await Applications.insertApplication(req.body));
  } catch (error) {
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    res.json(await Applications.getApplicationById(req.params.id));
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    res.json(await Applications.updateApplicationById(req.params.id, req.body));
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    res.json(await Applications.deleteApplicationById(req.params.id));
  } catch (error) {
    next(error);
  }
};
