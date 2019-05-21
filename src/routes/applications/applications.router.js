const express = require("express");
const applicationsController = require("./applications.controller");

const router = express.Router();

router.get("", applicationsController.list);
router.post("", applicationsController.create);
router.get("/:id", applicationsController.get);
router.put("/:id", applicationsController.update);
router.delete("/:id", applicationsController.delete);

module.exports = router;
