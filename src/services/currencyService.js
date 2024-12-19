const axios = require("axios");

exports.getExchangeRate = async (from, to) => {
  //   const url = `${process.env.CURRENCY_API_URL}/latest?access_key=${process.env.CURRENCY_API_KEY}&base=${from}&symbols=${to}`;

  const url = `https://api.frankfurter.app/latest?from=${from}&to=${to}`;

  const { data } = await axios.get(url);
  if (!data || !data.rates) {
    throw new Error("Unable to fetch exchange rates");
  }

  return data.rates[to];
};
