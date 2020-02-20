// const modelM = require('../database-benchmark/mongoDB/model.js');
const modelP = require('../database-benchmark/postgreSQL/model.js');


module.exports = {
  //mongoose controller:
  // getAllM: (req, res) => {
  //   let regexString = '';
  //   for (var i = 0; i < req.query.term.length; i++) {
  //     regexString += '.*' + req.query.term[i];
  //   }
  //   regexString += '.*';
  //   modelM.getResults(regexString)
  //     .then((items) => res.status(200).send(items))
  //     .catch(err => res.status(400).send(err));
  // },
  //postgres controller:
  getAllP: (req, res) => {
    let regexString = '';
    for (var i = 0; i < req.query.term.length; i++) {
      regexString += '%' + req.query.term[i];
    }
    regexString += '%';
    modelP.getResults(regexString, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
