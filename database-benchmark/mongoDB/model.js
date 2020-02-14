const Search = require('index.js');

module.exports = {
  autocomplete: (regexp) => Search.find({ 'term': { $regex: regexp, $options: 'i' } }).limit(10),
};
