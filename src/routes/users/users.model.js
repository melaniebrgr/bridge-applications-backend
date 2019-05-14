const { Model } = require("objection");

const { errorText, NotFoundError } = require("../../utils/error");

class Users extends Model {
  static get tableName() {
    return "users";
  }

  static async listUsers() {
    const users = await Users.query();
    if (users) return users;
    throw new NotFoundError(errorText.NOT_FOUND_USERS);
  }

  static async getUserById(id) {
    const user = await Users.query().where("id", id);
    if (user) return user[0];
    throw new NotFoundError(errorText.NOT_FOUND_USER);
  }
}

module.exports = Users;
