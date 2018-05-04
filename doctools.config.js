const path = require('path');
const ModuleMapper = require('yootheme-doctools/src/plugins/ModuleMapper.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const VuePressExporter = require('yootheme-doctools/src/plugins/VuePressExporter.js');
const MarkdownExporter = require('yootheme-doctools/src/plugins/MarkdownExporter.js');
const DefaultLoader = require('yootheme-doctools/src/loaders/DefaultLoader.js');
const VueRunner = require('yootheme-doctools/src/runnner/VueRunner.js');
const util = require('yootheme-doctools/src/util');

module.exports = {

    include: ['src/js/**/*'],

    menu: [
        {
            label: 'package',
            match: [ (file, desc) => desc.type === 'package']
        },
        {
            label: 'core',
            match: util.match.and('src/js/core/*.js', (file, desc) => desc.readme)
        },
        {
            label: 'components',
            match: ['src/js/components/*.js']
        },
        {
            label: 'utils',
            match: ['src/js/util/*.js']
        }
    ],

    menus: {
        menu: true
    },

    loaders: [
        () => new DefaultLoader({
            type: 'UIkitComponent',
            include: ['src/js/components/*.js', 'src/js/mixin/*.js', 'src/js/core/*.js'],
            exclude: ['src/js/core/core.js'],
            desc: {runtime: true}
        }),
        () => new DefaultLoader()
    ],

     /**
     * extra mapping plugins
     */
    plugins: [
        'RuntimeAnalyzer',
        new RuntimeAnalyzer(VueRunner.RTAConfig),
        new ModuleMapper({
            getReadme(desc) {
                return path.join(__dirname, 'docs', 'components', desc.name.toLowerCase() + '.md');
            }
        }),
        'UIkitComponentMapper',
        // 'VueComponentMapper',
        'ComponentLinker',
        // new MarkdownExporter({
        //     output: false,
        // }),
        // new VuePressExporter({
        //     getMDFileName: desc => desc.name + '.md'
        // }),
    ],

    getResourceName: desc => desc.fileInPackage.substr(2)
};