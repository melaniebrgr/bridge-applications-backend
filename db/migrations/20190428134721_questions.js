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
        .integer("applications_id")
        .notNullable()
        .references("id")
        .inTable("applications");
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

    .createTable("users_answers", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table
        .integer("questions_id")
        .notNullable()
        .references("id")
        .inTable("questions");
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

exports.down = knex => knex.schema.dropTableIfExists("questions");
