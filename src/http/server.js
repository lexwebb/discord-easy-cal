const http = require('http');
const url = require('url');
const logger = require('winston');

let listeningPort = 8080;

module.exports.setPort = (port) => {
    if (typeof port === 'number' && port <= 65535) {
        listeningPort = port;
    } else {
        throw new RangeError(`Invalid Listening Port, port ${port}`);
    }
};

module.exports.start = () => {
    http.createServer((req, res) => {
        const urlparameters = url.parse(req.url, true);
        // TODO: make path read from config
        if (urlparameters.pathname === '/easyCalAuth') {
            const token = urlparameters.query.code;
            const guild = urlparameters.query.state;
            logger.info(token);
            logger.info(guild);
        }
        res.write('Hello World!');
    }).listen(listeningPort);
};
