
/* eslint-env node */
module.exports = {

    src_folders: ['tests/js/nightwatch'],
    output_folder: 'reports',
    globals_path: './nightwatch.globals.js',
    selenium: {
        start_process: false,
        host: 'hub-cloud.browserstack.com',
        port: 80
    },

    test_settings: {
        default: {
            selenium_port: 9515,
            selenium_host: 'localhost',
            default_path_prefix: '',
            screenshots: {
                enabled: true,
                path: 'screenshots'
            },
            desiredCapabilities: {
                'browserstack.user': process.env.BROWSERSTACK_USER,
                'browserstack.key': process.env.BROWSERSTACK_PASS,
                browser: 'chrome'
            }
        },

        chrome: {
        }
    }
};