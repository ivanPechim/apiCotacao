const express = require('express');
const router = express.Router();


const conselhoController = require('../../controllers/conselho');

router.get('/', conselhoController.getConselho);

module.exports = router;