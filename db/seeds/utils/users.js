const faker = require("faker");

const genders = ["Woman", "Agender", "Non-binary", "Man"];

const pronouns = ["She/her", "They/their", "Him/his"];

const identities = [
  "Person of colour",
  "Indigenous person",
  "LGBTQIA+",
  "Person with a disability",
  "Prefer not to disclose"
];

const createUser = () => ({
  id: faker.random.uuid(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  role: "student",
  employment_status: faker.random.arrayElement([
    "full_time",
    "part_time",
    "in_school",
    "looking",
    "not_looking"
  ]),
  employer: faker.company.companyName(),
  genders_id: faker.random.number(genders.length - 1),
  pronouns_id: faker.random.number(pronouns.length - 1),
  identities_id: faker.random.number(identities.length - 1)
});

const createGenders = () =>
  genders.map((gender, i) => ({
    id: i,
    gender
  }));

const createPronouns = () =>
  pronouns.map((pronoun, i) => ({
    id: i,
    pronoun
  }));

const createIdentities = () =>
  identities.map((identity, i) => ({
    id: i,
    identity
  }));

const createNUsers = n => Array.from(Array(n), createUser);

module.exports = {
  createIdentities,
  createPronouns,
  createGenders,
  createNUsers
};
