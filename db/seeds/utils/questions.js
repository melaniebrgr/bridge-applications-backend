const faker = require("faker");

const createQuestion = cohorts => (_, i) => ({
  id: i,
  question: faker.lorem.sentence() + "?",
  required: faker.random.boolean(),
  cohorts_id: cohorts[i % cohorts.length].id
});

const createQuestions = cohorts =>
  Array.from(Array(cohorts.length * 4), createQuestion(cohorts));

const createAnswer = questions => (_, i) => ({
  id: i,
  answer: faker.lorem.words(),
  questions_id: questions[i % questions.length].id
});

const createAnswers = questions =>
  Array.from(Array(questions.length * 4), createAnswer(questions));

const createApplicationsAnswer = applications => (answer, i) => ({
  id: i,
  answers_id: answer.id,
  applications_id: applications[i % applications.length].id
});

const createApplicationsAnswers = (answers, applications) =>
  answers.map(createApplicationsAnswer(applications));

module.exports = {
  createQuestions,
  createAnswers,
  createApplicationsAnswers
};
