const database = require("../../db");
const Users = require("./users.model");

const index = (req, res, next) => {
  return Users.query()
    .then(users => res.json({ data: users }))
    .catch(error => next(error));
};

module.exports = {
  index
};
