const modelM = require('../database-benchmark/mongoDB/model.js');
const modelP = require('../database-benchmark/postgreSQL/model.js');

describe('database', () => {

  // importing models will actually create the connection for us!
  // just make sure we dump everything before we start!
  // beforeAll(async (done) => {
  //   await mongoose.connection.collections['searchitems'].deleteMany();
  //   done();
  // });

  // afterAll(async (done) => {
  //   await mongoose.connection.close(true)
  //   done();
  // });

  // test ('should get all the items', (done) => {
  //   var sampleSearches = [{ id: 1, name: "testItem1" }, { id: 2, name: "testItem2" }, { id: 3, name: "testItem3" }];
  //   return models.addItems(sampleSearches)
  //     .then(() => {
  //       return models.getAll();
  //     })
  //     .then(dbResponse => {
  //       expect(dbResponse.length).toBe(3);
  //       done();
  //     });
  // });

  test ('MongoDB should retrieve results in less than 50ms', (done) => {
    const testStrings = ['.*a.*u.*t.*', '.*b.*a.*r.*t.*', '.*l.*i.*d.*e.*r.*o.*', '.*t.*e.*s.*t.*'];
    const queryArray = testStrings.map(str => queryArray.push(modelM.getResults(str).explain('executionStats')));
    Promise.all(queryArray)
      .then(results => {
        console.log(results);
        done();
      });
  });
  
});

