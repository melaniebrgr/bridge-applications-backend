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
    const user = await Users.query().findById(id);
    if (user) return user;
    throw new NotFoundError(errorText.NOT_FOUND_USER);
  }

  static async insertUser({
    id,
    first_name,
    last_name,
    email,
    role,
    employment_status,
    employer,
    pronouns
  }) {
    return Users.query()
      .insert({
        id,
        first_name,
        last_name,
        email,
        role,
        employment_status,
        employer,
        pronouns
      })
      .returning("*");
  }

  static async updateUser(id, update) {
    return Users.query().patchAndFetchById(id, update);
  }

  static async deleteUserById(id) {
    const numDeleted = await Users.query().deleteById(id);
    if (numDeleted) return numDeleted;
    throw new NotFoundError(errorText.USER_NOT_DELETED);
  }

  static async getApplicationsByUserId(id) {
    const user = await Users.query()
      .findById(id)
      .eager("applications");
    if (user.applications) return user.applications;
    throw new NotFoundError(errorText.NOT_FOUND_APPLICATIONS);
  }

  static relationMappings() {
    return {
      users_genders: {
        relation: Model.HasOneRelation,
        modelClass: require("../usersGenders/usersGenders.model"),
        join: {
          from: "users.id",
          to: "users_genders.users_id"
        }
      },
      users_identities: {
        relation: Model.HasManyRelation,
        modelClass: require("../usersIdentities/usersIdentities.model"),
        join: {
          from: "users.id",
          to: "users_identities.users_id"
        }
      },
      applications: {
        relation: Model.HasManyRelation,
        modelClass: require("../applications/applications.model"),
        join: {
          from: "users.id",
          to: "applications.users_id"
        }
      }
    };
  }
}

module.exports = Users;
