exports.up = knex =>
  knex.schema.createTable("applications", table => {
    table
      .increments("id")
      .unique()
      .primary()
      .notNullable();
    table
      .integer("users_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("cohorts_id")
      .notNullable()
      .references("id")
      .inTable("cohorts");
    table.datetime("date_created").notNullable();
    table
      .boolean("accepted_test")
      .notNullable()
      .defaultTo(false);
    table
      .boolean("accepted_cohort")
      .notNullable()
      .defaultTo(false);
  });

exports.down = knex => knex.schema.dropTableIfExists("applications");
