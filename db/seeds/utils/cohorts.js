const faker = require("faker");

const cohorts = [
  { cohort: "Cohort 1", type: "frontend" },
  { cohort: "Cohort 2", type: "frontend" },
  { cohort: "Cohort 3", type: "frontend" },
  { cohort: "Tulip Cohort 4", type: "frontend" },
  { cohort: "Cohort 1", type: "design" },
  { cohort: "Coinsquare Cohort 5", type: "frontend" },
  { cohort: "Cohort 6", type: "frontend" },
  { cohort: "Cohort 0", type: "backend" }
];

const createCohorts = () =>
  cohorts.map((cohort, i) => ({
    id: i,
    cohort: cohort.cohort,
    date_start: faker.date.past(),
    date_end: faker.date.future(),
    category: cohort.type
  }));

module.exports = {
  createCohorts
};
