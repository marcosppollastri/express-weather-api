const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const config = require('config');
const {basepath, apiKey} = config.get('services.openWeather');
const {getIpLocation} = require('./ipApi.service');

async function weatherService(service, city, ip) {
    if (!city) {
        city = await getCityByIp(ip);
    }
    const params = new URLSearchParams({
        q: city,
        appid: apiKey,

    }).toString();
    const response = await fetch(`${basepath}/${service}?${params}`);
    const data = await response.json();

    return data;

}

async function getCityByIp(ip){
    const data = await getIpLocation(ip);
    return data.city;
}

module.exports = {weatherService};