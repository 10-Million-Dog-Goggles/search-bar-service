const model = require('./index.js');


module.exports = {
  autocomplete: (regexp) => model.find({ term: new RegExp(regexp)}).limit(10)
};

// module.exports = {
//   autocomplete: (regexp) => model.aggregate([
//     { $match: { term: new RegExp(regexp) }},
//     { $group: {_id: '$term'}},
//     { $limit: 10 },
//   ])
// };
