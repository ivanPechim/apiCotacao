const serviceCambio = require('../services/cambio');

exports.getCotacaoMoedas = async  (req, res, callback) => {
  try {
    const cambio = await serviceCambio.getCotacaoMoedas(req);
    return res.status(200).json(cambio);
  } catch (error) {
    console.error('controllerGetCotacaoMoedas::', error);
    return res.status(500).json({ message: "Ocorreu um erro inesperado!" });
  };
};

exports.getCotacaoDaily = async  (req, res, callback) => {
  try {
    const cambio = await serviceCambio.getCotacaoDaily(req);
    return res.status(200).json(cambio);
  } catch (error) {
    console.error('controllerGetCotacaoDaily::', error);
    return res.status(500).json({ message: "Ocorreu um erro inesperado!" });
  };
};
