const { validationResult } = require("express-validator/check");

const errorText = {
  NOT_FOUND_COHORTS: "Unable to find cohorts",
  NOT_FOUND_COHORT: "Unable to find cohort",
  NOT_FOUND_USERS: "Unable to find users",
  NOT_FOUND_USER: "Unable to find user",
  USER_NOT_DELETED: "User not deleted",
  NOT_DELETED: "Nothing deleted",
  NOT_FOUND_QUESTIONS: "Unable to find questions",
  NOT_FOUND_QUESTION: "Unable to find questions",
  NOT_FOUND_ANSWERS: "Unable to find answers",
  NOT_FOUND_APPLICATIONS: "Unable to find applications",
  NOT_FOUND_APPLICATION: "Unable to find application"
};

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

class InvalidError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 422;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

const checkForValidationErrors = req => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) throw new InvalidError(errors.array());
};

module.exports = {
  errorText,
  NotFoundError,
  checkForValidationErrors
};
