const { getExchangeRate } = require("../services/currencyService");
const { getHistoricalRates } = require("../services/historicalService");

exports.convertCurrency = async (req, res, next) => {
  try {
    const { from, to, amount, reverse } = req.query;

    if (!from || !to || !amount) {
      return res.status(400).json({ error: "Missing query parameters" });
    }

    if (reverse === "true") {
      [from, to] = [to, from];
    }

    const rate = await getExchangeRate(from.toUpperCase(), to.toUpperCase());
    const convertedAmount = rate * Number(amount);
    res.json({ from, to, rate, amount, convertedAmount });
  } catch (err) {
    next(err);
  }
};

exports.getHistoricalData = async (req, res, next) => {
  try {
    let { base, symbols, start_date, end_date } = req.query;
    if (!base || !symbols || !start_date || !end_date) {
      return res.status(400).json({ error: "Missing query parameters" });
    }

    base = base.toUpperCase();
    symbols = symbols.toUpperCase();

    const rates = await getHistoricalRates(base, symbols, start_date, end_date);
    res.json(rates);
  } catch (err) {
    next(err);
  }
};
