const axiosMethods = require("../tools/axiosMethods");
const urlBase = `https://economia.awesomeapi.com.br/`;

exports.getCotacaoMoedas = async (req) => {
  try{
    const moedas = (req.params.moedas).toUpperCase();
    const lastCotacao = `${ urlBase }last/${ moedas }`;
    const result = await axiosMethods.get(lastCotacao);
    console.log(result);
    return result;
  } catch (e) {
    console.log('serviceGetCotacaoMoedas::', e);
  }
};

exports.getCotacaoDaily = async (req) => {
  try{
    const dias = req.params.dias;
    const moedas = (req.params.moedas).toUpperCase();
    const dailyCotacao = `${ urlBase }json/daily/${ moedas }/${ +dias }`;
    const result = await axiosMethods.get(dailyCotacao);
    console.log(result);
    return result;
  } catch (e) {
    console.log('serviceGetCotacaoDaily::', e);
  }
};
