const express = require("express");
const usersController = require("./users.controller");
const usersValidations = require("./users.validations");

const router = express.Router();

router.get("", usersController.list);
router.post("", usersValidations.create, usersController.create);
router.get("/:id", usersController.get);
router.get("/:id/applications", usersController.getApplications);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.delete);

module.exports = router;
