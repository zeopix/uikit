
/* eslint-env node */

const bsMode = ~process.argv.join(' ').indexOf('--bs') || process.env.NIGHTWATCH_BROWSERSTACK;

const nightwatch_config = {

    src_folders: ['tests/js/nightwatch'],
    output_folder: 'reports',
    globals_path: './nightwatch.globals.js',
    selenium: {
        start_process: false,
        host: 'hub-cloud.browserstack.com',
        port: 80
    },

    test_settings: {}
};

if (bsMode) {

    const devices = [
        {
            device: 'Samsung Galaxy S8',
            realMobile: 'true',
            os_version: '7.0',
            mobile: true
        },
        {
            device: 'iPhone X',
            realMobile: 'true',
            os_version: '11.0',
            mobile: true
        }
    ];
    devices.forEach((desiredCapabilities, i) => {
        const id = desiredCapabilities.device.replace(/ /g, '_');
        nightwatch_config.test_settings[id] = {desiredCapabilities};
    });

    process.argv.env = devices.map(entry => `'${entry.device}'`).join(',');

    for (const i in nightwatch_config.test_settings) {
        const config = nightwatch_config.test_settings[i];
        config.selenium_host = nightwatch_config.selenium.host;
        config.selenium_port = nightwatch_config.selenium.port;
        config.default_path_prefix = null;
        config.desiredCapabilities = {
            ...config.desiredCapabilities,
            'browserstack.user': process.env.BROWSERSTACK_USERNAME,
            'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
            'browserstack.local': true,
            'browserstack.debug': true,
            build: process.env.CIRCLE_BUILD_NUM || "local:" + new Date(Date.now()).toISOString(),
            project: 'uikit',
            name: 'uikit'

        }
    }

} else {

    nightwatch_config.test_settings = {
        default: {
            //settings for local testing
            selenium_port: 9515,
            selenium_host: 'localhost',
            default_path_prefix: ''
        }
    };
}

module.exports = nightwatch_config;