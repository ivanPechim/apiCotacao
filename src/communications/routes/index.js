'use strict';

const express = require('express');

const router = express.Router();

router.use('/api/conselhos', require('./conselho'));
router.use('/api/cambio', require('./cambio'));

module.exports = router;
