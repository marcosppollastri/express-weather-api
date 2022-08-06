const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const config = require('config');
const {basepath} = config.get('services.ipApi');

async function getIpLocation(ip) {
    const fields = ['status', 'message', 'query', 'country', 'city'];
    const params = new URLSearchParams({
        fields: fields.join(),
    }).toString();
    const response = await fetch(`${basepath}/${ip}?${params}`);
    const data = await response.json();
    if (data.status === 'fail') {
        const err = new Error();
        const { message, query} = data;
        Object.assign(err, {
            status: 400,
            message,
            query,
        });
        throw err;
    }
    return data;

}

module.exports = {getIpLocation};