const { Model } = require("objection");
const { errorText, NotFoundError } = require("../../utils/error");

class Applications extends Model {
  static get tableName() {
    return "applications";
  }

  static async listApplications() {
    const applications = await Applications.query();
    if (applications) return applications;
    throw new NotFoundError(errorText.NOT_FOUND_APPLICATIONS);
  }

  static async insertApplication(application) {
    return Applications.query()
      .insert(application)
      .returning("*");
  }

  static async getApplicationById(id) {
    const cohort = await Applications.query().findById(id);
    if (cohort) return cohort;
    throw new NotFoundError(errorText.NOT_FOUND_APPLICATION);
  }

  static async updateApplicationById(id, update) {
    return Applications.query().patchAndFetchById(id, update);
  }

  static async deleteApplicationById(id) {
    const numDeleted = await Applications.query().deleteById(id);
    if (numDeleted) return numDeleted;
    throw new NotFoundError(errorText.NOT_DELETED);
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
      },
      cohorts: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("../cohorts/cohorts.model"),
        join: {
          from: "applications.cohorts_id",
          to: "cohorts.id"
        }
      }
    };
  }
}

module.exports = Applications;
