exports.up = knex =>
  knex.schema
    .createTable("questions", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table
        .integer("cohorts_id")
        .references("id")
        .inTable("cohorts")
        .onUpdate("NO ACTION")
        .onDelete("SET NULL");
      table.text("question").notNullable();
      table
        .boolean("required")
        .notNullable()
        .defaultsTo(true);
    })

    .createTable("answers", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table
        .integer("questions_id")
        .references("id")
        .inTable("questions")
        .onUpdate("NO ACTION")
        .onDelete("SET NULL");
      table
        .integer("applications_id")
        .notNullable()
        .references("id")
        .inTable("applications")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.text("answer").notNullable();
    });

exports.down = knex =>
  knex.schema.dropTableIfExists("answers").dropTableIfExists("questions");
