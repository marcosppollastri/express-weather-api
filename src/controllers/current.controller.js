const { weatherService } = require('../services/openWeather.service');

async function getCurrentWeather(req, res, next){
    try {
        const ip = req.normalizedIp;
        const { city } = req.params;
        const { units } = req.query;
        const options = {
          city,
          units,
          service: 'weather'
        }
        const response = await weatherService(options, ip);
        res.json(response);
    } catch (err) {
        next(err)
    }

    
    
}


module.exports = { getCurrentWeather };