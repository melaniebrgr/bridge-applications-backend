const express = require("express");

const healthRouter = require("../routes/health/health.router");
const usersRouter = require("../routes/users/users.router");
const cohortsRouter = require("../routes/cohorts/cohorts.router");
const questionsRouter = require("../routes/questions/questions.router");
const applicationsRouter = require("../routes/applications/applications.router");

const router = express.Router();

router.use("/health", healthRouter);
router.use("/users", usersRouter);
router.use("/cohorts", cohortsRouter);
router.use("/questions", questionsRouter);
router.use("/applications", applicationsRouter);

module.exports = router;
