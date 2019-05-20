const { Model } = require("objection");
const { errorText, NotFoundError } = require("../../utils/error");

class Questions extends Model {
  static get tableName() {
    return "questions";
  }

  static async getAllQuestions() {
    const questions = await Questions.query();
    if (questions) return questions;
    throw new NotFoundError(errorText.NOT_FOUND_QUESTIONS);
  }

  static async getQuestionById(id) {
    const question = await Questions.query().findById(id);
    if (question) return question;
    throw new NotFoundError(errorText.NOT_FOUND_QUESTION);
  }

  static get relationMappings() {
    return {
      cohorts: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("../cohorts/cohorts.model"),
        join: {
          from: "questions.cohort_id",
          to: "cohorts.id"
        }
      }
    };
  }
}

module.exports = Questions;