const serviceConselho = require('../services/conselho');

const getConselho = async  (req, res, callback) => {
  try {
    const conselho = await serviceConselho.getConselho();
    console.log(conselho);
    return res.status(200).json(conselho);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: "Ocorreu um erro inesperado!" });
  }
}

module.exports = {
  getConselho
};