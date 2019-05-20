const { Model } = require("objection");

class UsersIdentities extends Model {
  static get tableName() {
    return "users_identities";
  }

  static relationMappings() {
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("../users/users.model"),
        join: {
          from: "users_identities.users_id",
          to: "users.id"
        }
      }
    };
  }
}

module.exports = UsersIdentities;
