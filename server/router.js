const router = require('express').Router();
const controllers = require('./controller.js');

router
  .route('/search')
  .get(controllers.getAllP);

module.exports = router;
