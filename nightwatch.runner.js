/* eslint-env node */

const conf = require('./nightwatch.conf');
const globals = require('./nightwatch.globals');

const cp = require('child_process');
const httpServer = require('http-server');

const browserstack = require('browserstack-local');
const nightwatch = require('nightwatch');
const chromedriver = require('chromedriver');

const server = httpServer.createServer(); // {root:'./'}
const configs = Object.keys(conf.test_settings);

let bsLocal = null;

if (~process.argv.indexOf('--bs') || process.env.NIGHTWATCH_BROWSERSTACK) {
    bsLocal = nightwatch.bs_local = new browserstack.Local;
}

beforeTests().then(doTests).then(afterTest);

function beforeTests() {

    server.listen(globals.port, globals.host);

    return new Promise(res => {

        if (bsLocal) {
            bsLocal.start({}, err => {

                if (err) {
                    if (err.message.indexOf('another browserstack local')) {
                        console.log('re-using running bs-local instance');
                        res();
                    } else {
                        throw err.message;
                    }
                } else {
                    res();
                }

            });
        } else {
            chromedriver.start();
            res();
        }
    });
}

function doTests() {

    return new Promise(res => {
        const comand = './node_modules/.bin/nightwatch -e ' + configs.join(',') + ' ' + process.argv.slice(2).join(' ');
        const proc = cp.exec(comand);
        proc.stdout.on('data', data => {
            console.log(data);
        });

        proc.stderr.on('data', err => {
            console.log(err);
        });

        proc.on('close', res);
    });
}

function afterTest(code) {
    server.close();
    if (bsLocal) {
        bsLocal.stop(() => {});
    } else {
        chromedriver.stop();
    }

    process.exit(code);
}

