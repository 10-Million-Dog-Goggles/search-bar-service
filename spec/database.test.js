const modelM = require('../database-benchmark/mongoDB/model.js');

const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'gienappa',
  host: 'localhost',
  database: 'searchterms',
  password: '66jtune66',
  port: 5432,
});


describe('Postgres performance', () => {

  const testStrings = ['%a%u%t%', '%b%a%r%t%', '%l%i%d%e%r%o%', '%o%m%n%i%s%p%e%r%f%e%r%e%n%d%i%s%'];

  test ('Postgres should retrieve results in less than 50ms', async (done) => {
    const data = await pool.query(`EXPLAIN ANALYZE SELECT term FROM searchterms WHERE term LIKE '${testStrings[0]}' LIMIT 10`);
    
    const execTime = Number((data.rows[data.rows.length - 1]['QUERY PLAN'].split(':')[1]).slice(0, -3));
    // console.log(execTime);
    expect(execTime).toBeLessThan(50);

    done();
  });

  test ('Postgres should retrieve results in less than 50ms', async (done) => {
    const data = await pool.query(`EXPLAIN ANALYZE SELECT term FROM searchterms WHERE term LIKE '${testStrings[1]}' LIMIT 10`);
    
    const execTime = Number((data.rows[data.rows.length - 1]['QUERY PLAN'].split(':')[1]).slice(0, -3));
    // console.log(execTime);
    expect(execTime).toBeLessThan(50);

    done();
  });

  test ('Postgres should retrieve results in less than 50ms', async (done) => {
    const data = await pool.query(`EXPLAIN ANALYZE SELECT term FROM searchterms WHERE term LIKE '${testStrings[2]}' LIMIT 10`);
    
    const execTime = Number((data.rows[data.rows.length - 1]['QUERY PLAN'].split(':')[1]).slice(0, -3));
    // console.log(execTime);
    expect(execTime).toBeLessThan(50);

    done();
  });

  test ('Postgres should retrieve results in less than 50ms', async (done) => {
    const data = await pool.query(`EXPLAIN ANALYZE SELECT term FROM searchterms WHERE term LIKE '${testStrings[3]}' LIMIT 10`);
    
    const execTime = Number((data.rows[data.rows.length - 1]['QUERY PLAN'].split(':')[1]).slice(0, -3));
    // console.log(execTime);
    expect(execTime).toBeLessThan(50);

    done();
  });
});


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
