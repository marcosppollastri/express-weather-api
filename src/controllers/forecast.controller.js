const { weatherService } = require('../services/openWeather.service');

async function getForecast(req, res){
    try {
        const ip = req.normalizedIp;
        const {city} = req.params;
        const response = await weatherService('forecast',city, ip);
        res.json(response);
    } catch (error) {
        const {status, ...rest} = error;
        console.error(error);
        res.status(status || 500).json(rest);
    }

    
    
}


module.exports = { getForecast };