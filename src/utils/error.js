const errorText = {
  NOT_FOUND_COHORTS: "Unable to find cohorts",
  NOT_FOUND_USERS: "Unable to find users",
  NOT_FOUND_USER: "Unable to find user"
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
