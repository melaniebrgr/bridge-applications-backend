const {
  createUsers,
  createUsersGenders,
  createUsersIdentities
} = require("./utils/users");
const { createCohorts } = require("./utils/cohorts");
const { createApplications } = require("./utils/applications");
const { createQuestions, createAnswers } = require("./utils/questions");

const users = createUsers(20);
const usersGenders = createUsersGenders(users);
const usersIdentities = createUsersIdentities(users);
const cohorts = createCohorts();
const applications = createApplications(users, cohorts);
const questions = createQuestions(cohorts);
const answers = createAnswers(questions, applications);

exports.seed = knex => {
  const emptyTables = Promise.resolve()
    .then(() => knex("answers").del())
    .then(() => knex("questions").del())
    .then(() => knex("applications").del())
    .then(() => knex("cohorts").del())
    .then(() => knex("users_identities").del())
    .then(() => knex("users_genders").del())
    .then(() => knex("users").del());

  return emptyTables
    .then(() => knex("users").insert(users))
    .then(() => knex("users_genders").insert(usersGenders))
    .then(() => knex("users_identities").insert(usersIdentities))
    .then(() => knex("cohorts").insert(cohorts))
    .then(() => knex("applications").insert(applications))
    .then(() => knex("questions").insert(questions))
    .then(() => knex("answers").insert(answers));
};
