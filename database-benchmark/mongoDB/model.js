const Search = require('index.js');

module.exports = {
  autocomplete: (regex) => Search.find({ term: { $regex: regex, $options: 'i' } }).limit(10),
};
