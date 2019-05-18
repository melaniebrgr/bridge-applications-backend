const { Model } = require("objection");

const { errorText, NotFoundError } = require("../../utils/error");

class Cohorts extends Model {
  static get tableName() {
    return "cohorts";
  }

  static async listCohorts() {
    const cohorts = await Cohorts.query();
    if (cohorts) return cohorts;
    throw new NotFoundError(errorText.NOT_FOUND_COHORTS);
  }

  static async getCohortById(id) {
    const cohort = await Cohorts.query().where("id", id);
    if (cohort) return cohort[0];
    throw new NotFoundError(errorText.NOT_FOUND_COHORT);
  }

  static async insertCohort({ id, cohort, date_start, date_end, category }) {
    return Cohorts.query()
      .insert({
        id,
        cohort,
        date_start,
        date_end,
        category
      })
      .returning("*");
  }
}

module.exports = Cohorts;
