const database = require("../../db");
const Users = require("./users.model");

const { errorText, NotFoundError } = require("../../utils/error");

const index = (req, res, next) => {
  return Users.query()
    .then(users => res.json(users))
    .catch(error => next(error));
};

const get = (req, res, next) => {
  return Users.query()
    .where("id", req.params.id)
    .then(user => {
      if (user.length) {
        return res.json(user[0]);
      }
    })
    .catch(() => next(new NotFoundError(errorText.NOT_FOUND_USER)));
};

module.exports = {
  index,
  get
};
