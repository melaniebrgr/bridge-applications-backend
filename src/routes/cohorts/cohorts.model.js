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
    const cohort = await Cohorts.query().findById(id);
    if (cohort) return cohort;
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

  static async updateCohortById(id, update) {
    return Cohorts.query().patchAndFetchById(id, update);
  }

  static async deleteCohortById(id) {
    const numDeleted = await Cohorts.query().deleteById(id);
    if (numDeleted) return numDeleted;
    throw new NotFoundError(errorText.NOT_DELETED);
  }

  static async getQuestionsForCohort(id) {
    const cohortWithQuestions = await Cohorts.query()
      .findById(id)
      .eager("questions");
    if (cohortWithQuestions.questions)
      return cohortWithQuestions.questions.map(({ question, required }) => ({
        question,
        required
      }));
    throw new NotFoundError(errorText.NOT_FOUND_QUESTIONS);
  }

  static relationMappings() {
    return {
      questions: {
        relation: Model.HasManyRelation,
        modelClass: require("../questions/questions.model"),
        join: {
          from: "cohorts.id",
          to: "questions.cohorts_id"
        }
      },
      applications: {
        relation: Model.HasManyRelation,
        modelClass: require("../applications/applications.model"),
        join: {
          from: "cohorts.id",
          to: "applications.cohorts_id"
        }
      }
    };
  }
}

module.exports = Cohorts;
