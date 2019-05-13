exports.up = knex =>
  knex.schema.createTable("cohorts", table => {
    table
      .increments("id")
      .unique()
      .primary()
      .notNullable();
    table.string("cohort").notNullable();
    table.datetime("date_start").notNullable();
    table.datetime("date_end").notNullable();
    table.enu("category", ["frontend", "backend", "design"]).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("cohorts");
