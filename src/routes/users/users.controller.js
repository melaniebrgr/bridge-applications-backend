const database = require("../../db");
const Users = require("./users.model");

const { errorText, NotFoundError } = require("../../utils/error");

exports.list = async (req, res, next) => {
  try {
    res.json(await Users.listUsers());
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
