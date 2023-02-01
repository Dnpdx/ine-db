module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfbu76pgp3jsh6cl0qg0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'crudine'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '7SCDjCtrtwCbagU53BSkSObciw8XQf1W'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
