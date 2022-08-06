const { getIpLocation } = require('../services/ipApi.service');

async function getLocation(req, res){
    try {
        const ip = req.normalizedIp;
        const ipLocation = await getIpLocation(ip);
        res.json(ipLocation);
    } catch (error) {
        const {status, ...rest} = error;
        res.status(status || 500).json(rest);
    }

    
    
}


module.exports = { getLocation };