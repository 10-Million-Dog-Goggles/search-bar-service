const pg = require('pg');

const params = {
  user: 'postgres',
  password: '66jtune66',
  database: 'searchterms',
  host: '13.52.250.210',
  port: 5432,
};

const connectionString = `postgresql://${params.user}:${params.password}@${params.host}:${params.port}/${params.database}`;

const client = new pg.Client(connectionString);

client.connect()
  .then(() => console.log('postgres connected'))
  .catch(err => console.error('postgres connection error: ', err.stack));

module.exports = client;
