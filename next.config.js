module.exports = { async headers() { return [ { source: '/CNAME', headers: [{ key: 'Cache-Control', value: 'no-store' }] } ]; } };
