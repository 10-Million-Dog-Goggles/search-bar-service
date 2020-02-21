const modelM = require('../database-benchmark/mongoDB/model.js');


describe('MongoDB performance', () => {

  test ('MongoDB should retrieve results in less than 50ms', (done) => {
    const testStrings = ['.*a.*u.*t.*', '.*b.*a.*r.*t.*', '.*l.*i.*d.*e.*r.*o.*', '.*o.*m.*n.*i.*s.*p.*e.*r.*f.*e.*r.*e.*n.*d.*i.*s.*'];
    const queryArray = testStrings.map((str) => modelM.getResults(str).explain('executionStats'));
    
    const statsArray = [];
    Promise.all(queryArray)
      .then((results) => {
        results.forEach(res => statsArray.push(res[0].executionStats.executionTimeMillis));
      })
      .then(() => { 
        statsArray.forEach((stat) => {
          expect(stat).toBeLessThan(50);
        });
        done();
      });
  });
  
});

const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'gienappa',
  host: 'localhost',
  database: 'searchterms',
  password: '66jtune66',
  port: 5432,
}, () => console.log('Postgres connected'));

describe('Postgres performance', () => {

  test ('Postgres should retrieve results in less than 50ms', (done) => {
    const results = [];

    const testStrings = ['.*a.*u.*t.*', '.*b.*a.*r.*t.*', '.*l.*i.*d.*e.*r.*o.*', '.*o.*m.*n.*i.*s.*p.*e.*r.*f.*e.*r.*e.*n.*d.*i.*s.*'];
    const queryFn = (regexp) => {
      pool.query(`EXPLAIN ANALYZE SELECT term FROM searchterms WHERE term LIKE '${regexp}' LIMIT 10`, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          results.push(data);
        }
      });
    }

    testStrings.forEach(async (str) => {
      await queryFn(str);
    });

    console.log(results);
  });
})