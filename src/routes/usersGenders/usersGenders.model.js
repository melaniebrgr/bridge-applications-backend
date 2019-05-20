const { Model } = require("objection");

class UsersGenders extends Model {
  static get tableName() {
    return "users_genders";
  }

  static relationMappings() {
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("../users/users.model"),
        join: {
          from: "users_genders.users_id",
          to: "users.id"
        }
      }
    };
  }
}

module.exports = UsersGenders;
