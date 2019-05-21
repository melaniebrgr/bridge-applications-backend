const { Model } = require("objection");

class Answers extends Model {
  static get tableName() {
    return "answers";
  }

  static relationMappings() {
    return {
      questions: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("../questions/questions.model"),
        join: {
          from: "answers.questions_id",
          to: "questions.id"
        }
      }
    };
  }
}

module.exports = Answers;
