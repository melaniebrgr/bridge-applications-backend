exports.up = knex =>
  knex.schema
    .createTable("questions", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table.text("question").notNullable();
      table
        .boolean("required")
        .notNullable()
        .defaultsTo(true);
      table
        .integer("cohorts_id")
        .notNullable()
        .references("id")
        .inTable("cohorts");
    })

    .createTable("answers", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table.text("answer").notNullable();
      table
        .integer("questions_id")
        .notNullable()
        .references("id")
        .inTable("questions");
    })

    .createTable("applications_answers", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table
        .integer("answers_id")
        .notNullable()
        .references("id")
        .inTable("answers");
      table
        .integer("applications_id")
        .notNullable()
        .references("id")
        .inTable("applications");
    });

exports.down = knex =>
  knex.schema
    .dropTableIfExists("questions")
    .dropTableIfExists("answers")
    .dropTableIfExists("applications_answers");
