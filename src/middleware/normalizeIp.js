const randomIpv4 = require('random-ipv4');

module.exports = {
    normalizeIp: (req, res, next) => {
        const env = process.env.NODE_ENV;
        if (env === 'development') {
            req.normalizedIp = randomIpv4();
        } else {
            req.normalizedIp = req.ip;
        }
        next();
    }
}