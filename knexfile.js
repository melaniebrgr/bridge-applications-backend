module.exports = {
  client: "pg",
  connection: {
    host: "db", // comment this out to run migrations
    user: "admin",
    password: "admin",
    database: "bridge-applications-local"
  },
  migrations: {
    directory: `${__dirname}/db/migrations`
  },
  seeds: {
    directory: `${__dirname}/db/seeds`
  }
};
