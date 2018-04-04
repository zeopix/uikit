const conf = require('./nightwatch.conf');
const globals = require('./nightwatch.globals');

const cp = require('child_process');
const httpServer = require('http-server');
const server = httpServer.createServer(); // {root:'./'}

const configs = Object.keys(conf.test_settings);

server.listen(globals.port, globals.host);

const comand = './node_modules/.bin/nightwatch -e ' + configs.join(',') + ' ' + process.argv.slice(2).join(' ');

cp.exec(comand, {stdio: [0, 1, 2]}, (err, out) => {
    console.log(out);
    server.close();
}).on('error', err => {
    throw err;
});

