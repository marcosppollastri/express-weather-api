const { weatherService } = require('../services/openWeather.service');

async function getForecast(req, res, next){
    try {
        const ip = req.normalizedIp;
        const { city } = req.params;
        const { units } = req.query;
        const options = {
          city,
          units,
          service: 'forecast'
        }
        const response = await weatherService(options, ip);
        res.json(response);
    } catch (err) {
        next(err);
    }

    
    
}


module.exports = { getForecast };