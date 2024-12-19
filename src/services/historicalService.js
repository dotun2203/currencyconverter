const axios = require("axios");

exports.getHistoricalRates = async (from, to, start_date, end_date) => {
  //   const url = `${process.env.CURRENCY_API_URL}/timeseries?start_date=${start_date}&end_date=${end_date}&symbols=${symbols}&access_key=${process.env.CURRENCY_API_KEY}`;

  const url = `https://api.frankfurter.app/${start_date}..${end_date}?from=${from}&to=${to}`;

  const { data } = await axios.get(url);
  if (!data || !data.rates) {
    throw new Error("Unable to fetch historical data");
  }
  return data.rates;
};
