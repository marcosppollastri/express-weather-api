require('dotenv').config();

module.exports = {
    services: {
        ipApi: {
            basepath: 'http://ip-api.com/json/',
        },
        openWeather: {
            apiKey: process.env.OPEN_WEATHER_API_KEY,
            basepath: 'https://api.openweathermap.org/data/2.5/'
        }
    }
}