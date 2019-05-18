const database = require("../../db");
const Users = require("./users.model");

exports.list = async (req, res, next) => {
  try {
    res.json(await Users.listUsers());
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    res.json(await Users.insertUser(req.body));
  } catch (error) {
    next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    res.json(await Users.getUserById(req.params.id));
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    res.json(await Users.updateUser(req.params.id, req.body));
  } catch (error) {
    next(error);
  }
};
