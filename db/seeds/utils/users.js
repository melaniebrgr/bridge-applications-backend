const faker = require("faker");

const roles = ["student", "mentor", "teacher", "coordinator"];

const employmentStatuses = [
  "full_time",
  "part_time",
  "in_school",
  "looking",
  "not_looking"
];

const genders = ["Woman", "Agender", "Non-binary", "Man"];

const pronouns = ["She/her", "They/their", "Him/his"];

const identities = [
  "Person of colour",
  "Indigenous person",
  "LGBTQIA+",
  "Person with a disability",
  "Prefer not to disclose"
];

const createUser = (_, i) => ({
  id: i,
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  role: faker.random.arrayElement(roles),
  employment_status: faker.random.arrayElement(employmentStatuses),
  employer: faker.company.companyName(),
  pronouns: faker.random.arrayElement(pronouns)
});

const createUsers = n => Array.from(Array(n)).map(createUser);

const createUsersGender = (user, i) => ({
  id: i,
  users_id: user.id,
  gender: faker.random.arrayElement(genders)
});

const createUsersGenders = users => users.map(createUsersGender);

const createUsersIdentity = (user, i) => ({
  id: i,
  users_id: user.id,
  identity: faker.random.arrayElement(identities)
});

const createUsersIdentities = users => users.map(createUsersIdentity);

module.exports = {
  createUsers,
  createUsersGenders,
  createUsersIdentities
};
