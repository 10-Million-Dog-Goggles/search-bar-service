const model = require('../database-benchmark/mongoDB/model.js');

module.exports = {
  getAll: (req, res) => {
    model.autocomplete()
      .then(items => {
        res.status(200).send(items);
      })
      .catch(err => res.status(200).send(err));
  }
};