const model = require('./index.js');

module.exports = {
  autocomplete: (regexp) => model.find({ term: new RegExp(regexp)}).limit(10)
};
