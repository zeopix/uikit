const chromedriver = require('chromedriver');
const path = require('path');
const httpServer = require('http-server');

const server = httpServer.createServer({
    root: path.resolve(__dirname, './')
});

module.exports = {
    before(done) {
        server.server.listen(8080).on('listening', () => {
            chromedriver.start();
            setTimeout(() => {
                done();
            });
        });
    },

    after(done) {
        chromedriver.stop();
        server.close();
        done();
        process.exit();
    },
};