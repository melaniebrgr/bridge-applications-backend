const express = require("express");
const usersController = require("./users.controller");

const router = express.Router();

router.get("", usersController.list);
router.post("", usersController.create);
router.get("/:id", usersController.get);
router.get("/:id/applications", usersController.getApplications);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.delete);

module.exports = router;
