const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const config = require('config');
const {basepath, apiKey} = config.get('services.openWeather');
const {getIpLocation} = require('./ipApi.service');

async function weatherService(options, ip) {
    const { city, units, service } = options;
    let cityByIp;
    try {
        if (!city) {
            cityByIp = await getCityByIp(ip);
        }
        const params = new URLSearchParams({
            q: city || cityByIp,
            units: units || 'metric',
            appid: apiKey,
    
        }).toString();
        const response = await fetch(`${basepath}${service}?${params}`);
        const data = await response.json();
        if (data.cod != '200') {
            const err = new Error();
            Object.assign(err, {
                code: 'weather_service_error',
                details: data,
            })
            throw err;
        }
        return data;
    } catch (err) {
        throw err;
    }
    

}

async function getCityByIp(ip){
    const data = await getIpLocation(ip);
    return data.city;
}

module.exports = {weatherService};