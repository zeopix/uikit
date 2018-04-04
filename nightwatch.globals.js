/* eslint-env node */
const chromedriver = require('chromedriver');
// const httpServer = require('http-server');
const browserstack = require('browserstack-local');
const nightwatch = require('nightwatch');

let bsLocal = null;

if (~process.argv.indexOf('--bs') || process.env.NIGHTWATCH_BROWSERSTACK) {
    bsLocal = nightwatch.bs_local = new browserstack.Local;
}

const port = 8080;
const host = 'uikit.test';
const rootUrl = `http://${host}:${port}/tests`;

module.exports = {

    // server: httpServer.createServer(), // {root:'./'}

    port,

    host,

    rootUrl,

    before(done) {

        try {
            // this.server.listen(port, host);
        } catch (e) {

        }

        if (bsLocal) {

            bsLocal.start({}, err => {

                if (err) {
                    if (err.message.indexOf('another browserstack local')) {
                        console.log('re-using running bs-local instance');
                        done();
                    } else {
                        throw err.message;
                    }
                } else {
                    done();
                }

            });

        } else {
            chromedriver.start();
            done();
        }

    },

    after(done) {

        // this.server.close();

        if (bsLocal) {
            bsLocal.stop(() => {
                done();
                process.exit();
            });
        } else {
            chromedriver.stop();
            done();
            process.exit();
        }

    }

};

// kill browsers and stuf on crash/abort
process.on('exit', function () {
    module.exports.after(() => {});
});