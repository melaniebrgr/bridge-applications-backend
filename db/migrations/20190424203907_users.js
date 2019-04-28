exports.up = knex =>
  knex.schema
    .createTable("genders", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table
        .string("gender")
        .unique()
        .notNullable();
    })

    .createTable("pronouns", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table
        .string("pronoun")
        .unique()
        .notNullable();
    })

    .createTable("identifications", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table
        .string("identity")
        .unique()
        .notNullable();
    })

    .createTable("users", table => {
      table
        .uuid("id")
        .unique()
        .primary()
        .notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table
        .string("email")
        .unique()
        .notNullable();
      table.enu("role", ["student", "mentor", "teacher", "coordinator"]);
      table
        .enu("employment_status", [
          "full_time",
          "part_time",
          "in_school",
          "looking",
          "not_looking"
        ])
        .notNullable();
      table.string("employer");
      table
        .integer("genders_id")
        .unsigned()
        .references("id")
        .inTable("genders");
      table
        .integer("pronouns_id")
        .unsigned()
        .references("id")
        .inTable("pronouns");
      table
        .integer("identifications_id")
        .unsigned()
        .references("id")
        .inTable("identifications");
    });

exports.down = knex =>
  knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("identifications")
    .dropTableIfExists("pronouns")
    .dropTableIfExists("genders");
