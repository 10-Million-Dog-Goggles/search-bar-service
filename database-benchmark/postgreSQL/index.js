const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'gienappa',
  host: 'localhost',
  database: 'searchterms',
  password: '66jtune66',
  port: 5432,
});


module.exports = pool;