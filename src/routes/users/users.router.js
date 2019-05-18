const express = require("express");

const usersController = require("./users.controller");

const router = express.Router();

router.get("", usersController.list);
router.post("", usersController.create);
router.get("/:id", usersController.get);

module.exports = {
  usersRouter: router
};
