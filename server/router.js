const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/search')
  .get(controller.getAll);

module.exports = router;