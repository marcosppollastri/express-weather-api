const {randomIp} = require('./helpers/randomIp');

module.exports = {
    normalizeIp: (req, res, next) => {
        const env = process.env.NODE_ENV;
        if (env === 'development') {
            req.normalizedIp = randomIp().ip;
        } else {
            req.normalizedIp = req.ip;
        }
        next();
    }
}