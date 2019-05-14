const Knex = require("knex");
const { Model } = require("objection");
const configuration = require("../knexfile");

const KnexInstance = Knex(configuration);

Model.knex(KnexInstance);

module.exports = KnexInstance;
