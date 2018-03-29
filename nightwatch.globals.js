/* eslint-env node */
const chromedriver = require('chromedriver');
const path = require('path');
const httpServer = require('http-server');

const server = httpServer.createServer({
    root: path.resolve(__dirname, './')
});

module.exports = {

    before(done) {
        server.listen(8080);
        chromedriver.start();
        done();
    },

    after(done) {
        chromedriver.stop();
        server.close();
        process.exit();
        done();
    }

};