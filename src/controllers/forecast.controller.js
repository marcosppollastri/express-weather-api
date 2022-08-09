const { weatherService } = require('../services/openWeather.service');

async function getForecast(req, res, next) {
  try {
    const ip = req.normalizedIp;
    const { city } = req.params;
    const response = await weatherService('forecast', city, ip);
    res.json(response);
  } catch (err) {
    next(err);
  }
}

module.exports = { getForecast };
