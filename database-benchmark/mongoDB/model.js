const model = require('./index.js');

module.exports = {
  getResults: (regexp) => model.find({ term: new RegExp(regexp)}).limit(10)
};
