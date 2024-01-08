const express = require('express');

/**
 * Seta todas as rotas da API.
 * @param {*} app 
 */
function setUpRoutes (app) {
  const router = express.Router();

  router.use(require('./routes'));
  
  app.use(router);
};

module.exports = { setUpRoutes }