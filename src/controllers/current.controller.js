const { currentWeather } = require('../services/openWeather.service');

async function getCurrentWeather(req, res){
    try {
        const ip = req.normalizedIp;
        const {city} = req.params;
        const response = await currentWeather(city, ip);
        res.json(response);
    } catch (error) {
        const {status, ...rest} = error;
        console.error(error);
        res.status(status || 500).json(rest);
    }

    
    
}


module.exports = { getCurrentWeather };