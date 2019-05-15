exports.up = knex =>
  knex.schema
    .createTable("users", table => {
      table
        .increments("id")
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
      table.string("pronouns");
    })

    .createTable("users_genders", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table
        .integer("users_id")
        .unique()
        .notNullable()
        .references("id")
        .inTable("users");
      table.string("gender").notNullable();
    })

    .createTable("users_identities", table => {
      table
        .increments("id")
        .unique()
        .primary()
        .notNullable();
      table
        .integer("users_id")
        .unique()
        .notNullable()
        .references("id")
        .inTable("users");
      table.string("identity").notNullable();
    });

exports.down = knex =>
  knex.schema
    .dropTableIfExists("users_identities")
    .dropTableIfExists("users_genders")
    .dropTableIfExists("users");
