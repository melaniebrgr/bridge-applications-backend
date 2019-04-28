exports.up = knex =>
  knex.schema.createTable("applications", table => {
    table
      .increments("id")
      .unique()
      .primary()
      .notNullable();
    table.datetime("date_created").notNullable();
    table
      .boolean("accepted_test")
      .notNullable()
      .defaultTo(false);
    table
      .boolean("accepted_cohort")
      .notNullable()
      .defaultTo(false);
    table
      .uuid("users_id")
      .notNullable()
      .references("id")
      .inTable("users");
    table
      .integer("cohorts_id")
      .notNullable()
      .references("id")
      .inTable("cohorts");
  });

exports.down = knex => knex.schema.dropTableIfExists("applications");
