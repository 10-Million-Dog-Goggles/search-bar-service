const db = require('./index.js');

module.exports = {
  getResults: ({ regexp }, callback) => {
    db.query(`SELECT term FROM searchterms WHERE term LIKE ${regexp} LIMIT 10`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
};
