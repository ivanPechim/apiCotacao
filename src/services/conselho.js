const httpMethods = require('../tools/axiosMethods');

const getConselho = async () => {
  const apiUrl = `https://api.adviceslip.com/advice`;
  let result = await httpMethods.get(apiUrl);
  return result;
}

module.exports = {
  getConselho
};