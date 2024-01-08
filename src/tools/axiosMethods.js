const axios = require('axios').default;

const get = async (url, params = {}) => {
  let data;
  await axios
    .get(url, { 
      params: {
        ...params
      }
    })
    .then((res) => {
      data = res.data;
    });

  return data;
};

module.exports = {
  get
};