const { getIpLocation } = require('../services/ipApi.service');

async function getLocation(req, res, next){
    try {
        const ip = req.normalizedIp;
        const ipLocation = await getIpLocation(ip);
        res.json(ipLocation);
    } catch (err) {
        next(err)
    }

    
    
}


module.exports = { getLocation };