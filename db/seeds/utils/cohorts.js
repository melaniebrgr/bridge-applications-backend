const faker = require("faker");

const cohortsBase = [
  { cohort: "Cohort 1", type: "frontend" },
  { cohort: "Cohort 2", type: "frontend" },
  { cohort: "Cohort 3", type: "frontend" },
  { cohort: "Tulip Cohort 4", type: "frontend" },
  { cohort: "Design Cohort 1", type: "design" },
  { cohort: "Coinsquare Cohort 5", type: "frontend" },
  { cohort: "Cohort 6", type: "frontend" }
];

const createCohorts = () =>
  cohortsBase.map((cohort, i) => ({
    id: i,
    cohort: cohort.cohort,
    date_start: faker.date.past(),
    date_end: faker.date.future(),
    type: cohort.type
  }));

module.exports = {
  createCohorts
};
