const router = require('express').Router();
const controllers = require('./controller.js');

router
  .route('/search')
  .get(controllers.getAllM);

module.exports = router;
