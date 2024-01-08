const express = require('express');
const router = express.Router();

const cambioContoller = require('../../controllers/cambio')

router.get('/:moedas', cambioContoller.getCotacaoMoedas);

module.exports = router;
