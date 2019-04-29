const {
  createIdentities,
  createPronouns,
  createGenders,
  createNUsers
} = require("./utils/users");
const { createCohorts } = require("./utils/cohorts");
const { createApplications } = require("./utils/applications");
const {
  createQuestions,
  createAnswers,
  createApplicationsAnswers
} = require("./utils/questions");

const users = createNUsers(20);
const cohorts = createCohorts();
const applications = createApplications(users, cohorts);
const questions = createQuestions(cohorts);
const answers = createAnswers(questions);

exports.seed = knex => {
  const emptyTables = knex("applications_answers")
    .del()
    .then(() => knex("answers").del())
    .then(() => knex("questions").del())
    .then(() => knex("applications").del())
    .then(() => knex("cohorts").del())
    .then(() => knex("users").del())
    .then(() => knex("identities").del())
    .then(() => knex("pronouns").del())
    .then(() => knex("genders").del());

  return emptyTables
    .then(() => knex("genders").insert(createGenders()))
    .then(() => knex("pronouns").insert(createPronouns()))
    .then(() => knex("identities").insert(createIdentities()))
    .then(() => knex("users").insert(users))
    .then(() => knex("cohorts").insert(cohorts))
    .then(() => knex("applications").insert(applications))
    .then(() => knex("questions").insert(questions))
    .then(() => knex("answers").insert(answers))
    .then(() =>
      knex("applications_answers").insert(
        createApplicationsAnswers(answers, applications)
      )
    );
};
