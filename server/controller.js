const model = require('../database-benchmark/mongoDB/model.js');

module.exports = {
  getAll: (req, res) => {
    let regexString = '';
    for (var i = 0; i < req.query.term.length; i++) {
      regexString += '\\s*' + req.query.term[i];
    }
    regexString += '\\s*';
    model.autocomplete(regexString)
      .then(items => {
        res.status(200).send(items);
      })
      .catch(err => res.status(200).send(err));
  }
};