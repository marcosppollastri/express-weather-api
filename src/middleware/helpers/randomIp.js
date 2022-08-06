const ips = [
    {
        "ip": "28.198.65.19",
        "city": "Whitehall"
    },
    {
        "ip": "219.166.102.161",
        "city": "Tokyo"
    },
    {
        "ip": "34.46.126.208",
        "city": "Mountain View"
    }
]

module.exports = {
    randomIp: () => {
        const index = Math.floor(Math.random() * ips.length);
        return ips[index];
    }
}