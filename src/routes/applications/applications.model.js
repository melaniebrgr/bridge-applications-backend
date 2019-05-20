const { Model } = require("objection");

class Applications extends Model {
  static get tableName() {
    return "applications";
  }

  static relationMappings() {
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("../users/users.model"),
        join: {
          from: "applications.users_id",
          to: "users.id"
        }
      }
    };
  }
}

module.exports = UsersGenders;
