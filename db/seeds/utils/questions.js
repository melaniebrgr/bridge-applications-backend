const faker = require("faker");

const createQuestion = cohorts => (_, i) => ({
  id: i,
  cohorts_id: cohorts[i % cohorts.length].id,
  question: faker.lorem.sentence() + "?",
  required: faker.random.boolean()
});

const createQuestions = cohorts =>
  Array.from(Array(cohorts.length * 5), createQuestion(cohorts));

const createAnswer = (questions, applications) => (_, i) => ({
  id: i,
  questions_id: questions[i % questions.length].id,
  applications_id: applications[i % applications.length].id,
  answer: faker.lorem.words()
});

const createAnswers = (questions, applications) =>
  Array.from(
    Array(questions.length * 10),
    createAnswer(questions, applications)
  );

module.exports = {
  createQuestions,
  createAnswers
};
