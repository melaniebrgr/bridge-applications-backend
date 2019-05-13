const express = require("express");

const usersController = require("./users.controller");

const router = express.Router();

router.get("", usersController.index);

module.exports = {
  usersRouter: router
};
