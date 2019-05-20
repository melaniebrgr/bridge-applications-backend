const errorText = {
  NOT_FOUND_COHORTS: "Unable to find cohorts",
  NOT_FOUND_COHORT: "Unable to find cohort",
  NOT_FOUND_USERS: "Unable to find users",
  NOT_FOUND_USER: "Unable to find user",
  USER_NOT_DELETED: "User not deleted",
  NOT_DELETED: "Nothing deleted",
  NOT_FOUND_QUESTIONS: "Unable to find questions",
  NOT_FOUND_QUESTION: "Unable to find questions"
};

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  errorText,
  NotFoundError
};
