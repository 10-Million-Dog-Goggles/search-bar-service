const model = require('../database-benchmark/mongoDB/model.js');

module.exports = {
  getAll: (req, res) => {
    let regexString = '';
    for (var i = 0; i < req.query.term.length; i++) {
      regexString += '.*' + req.query.term[i];
    }
    regexString += '.*';
    model.autocomplete(regexString)
      .then((data) => res.status(200).send(data))
      .catch(err => res.status(400).send(err));
  }
};
