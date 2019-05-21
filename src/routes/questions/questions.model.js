const { Model } = require("objection");
const R = require("ramda");
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

  static async getAnswersByQuestionId(id) {
    const questionWithAnswers = await Questions.query()
      .findById(id)
      .eager("answers");
    if (questionWithAnswers.answers)
      return R.pluck("answer", questionWithAnswers.answers);
    throw new NotFoundError(errorText.NOT_FOUND_ANSWERS);
  }

  static get relationMappings() {
    return {
      cohorts: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("../cohorts/cohorts.model"),
        join: {
          from: "questions.cohorts_id",
          to: "cohorts.id"
        }
      },
      answers: {
        relation: Model.HasManyRelation,
        modelClass: require("../answers/answers.model"),
        join: {
          from: "questions.id",
          to: "answers.questions_id"
        }
      }
    };
  }
}

module.exports = Questions;
