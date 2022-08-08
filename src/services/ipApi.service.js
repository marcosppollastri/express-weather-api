const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const config = require('config');
const {basepath} = config.get('services.ipApi');

async function getIpLocation(ip) {
    try {
        const fields = ['status', 'message', 'query', 'country', 'city'];
        const params = new URLSearchParams({
            fields: fields.join(),
        }).toString();
        const response = await fetch(`${basepath}/${ip}?${params}`);
        const data = await response.json();
        if (data.status === 'fail') {
            const err = new Error();
            Object.assign(err, {
                code: 'ip_api_error',
                details: data,
            });
            throw err;
        }
        return data;
    } catch (err) {
        throw err;
    }
    

}

module.exports = {getIpLocation};