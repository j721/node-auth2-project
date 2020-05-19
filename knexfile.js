require("dotenv").config();

module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true, // needed for sqlite
      connection: {
        filename: './database/auth.db3',
      },
      migrations: {
        directory: './database/migrations'
      },
      seeds: {
        directory: './database/seeds'
      },
      pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        }
    },
}
}