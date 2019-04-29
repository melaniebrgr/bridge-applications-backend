const faker = require("faker");

const createApplication = cohorts => (user, i) => ({
  id: i,
  date_created: faker.date.past(),
  accepted_test: faker.random.boolean(),
  accepted_cohort: faker.random.boolean(),
  users_id: user.id,
  cohorts_id: faker.random.arrayElement(cohorts).id
});

const createApplications = (users, cohorts) =>
  users.map(createApplication(cohorts));

module.exports = {
  createApplications
};
