/* eslint-env node */

const port = 8080;
const host = 'uikit.test';
const rootUrl = `http://${host}:${port}/tests`;

module.exports = {

    port,

    host,

    rootUrl,

    after(done) {
        done();
        process.exit();
    }

};

process.on('exit', function() {
    module.exports.after(() => {});
});