const http = require('http');
const url = require('url');
const ServiceBase = require('../serviceBase');

exports.HttpServer = class extends ServiceBase {
    init() {
        this.listeningPort = 8080 || this.config.http.port;
    }

    start() {
        const bot = this;

        http.createServer((req, res) => {
            const urlparameters = url.parse(req.url, true);
            // TODO: make path read from config
            if (urlparameters.pathname === '/easyCalAuth') {
                const token = urlparameters.query.code;
                const guild = urlparameters.query.state;
                bot.services.database.putCalendar({
                    id: guild,
                    token,
                });
            }
            res.write('Hello World!');
        }).listen(bot.listeningPort);
    }
};
