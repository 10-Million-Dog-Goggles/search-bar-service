const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');
// const mongoose = require('mongoose');
// const Search = require('../index.js');

// const headers = Object.keys(Search.schema.paths)
//   .filter( x => ['_id', '__v'].indexOf(x) === -1);

const csvWriter = createCsvWriter({
  path: 'database-benchmark/mongoDB/resources/sampleDataM.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'term', title: 'term'},
  ],
});

const data = [];

for (var i = 0; i <= 10000000; i++) {
  data.push({ id: `${i}`, term: `${faker.commerce.productMaterial()} ${faker.commerce.product()}` });
}

csvWriter
  .writeRecords(data)
  .then(() => console.log('csv created successfully!'))
  .catch((err) => console.error(err));

// mongoose.connection.close()
//   .then( () => console.log('mongoose disconnected') )
//   .catch( err => console.error(err) );
