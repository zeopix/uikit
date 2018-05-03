const path = require('path');
const ModuleMapper = require('yootheme-doctools/src/plugins/ModuleMapper.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const VuePressExporter = require('yootheme-doctools/src/plugins/VuePressExporter.js');
const MarkdownExporter = require('yootheme-doctools/src/plugins/MarkdownExporter.js');
const VueRunner = require('yootheme-doctools/src/runnner/VueRunner.js');

module.exports = {
    include: ['src/js/util/*', 'src/js/core/*', 'src/js/component/*'],
    menu: [
        {
            label: 'package',
            match: [ (file, desc) => desc.type === 'package']
        },
        {
            label: 'core',
            match: ['src/js/core/*']
        },
        {
            label: 'components',
            match: ['src/js/components/*']
        },
        {
            label: 'utils',
            match: ['src/js/util/*']
        }
    ],

    menus: {
        menu: true
    },

     /**
     * extra mapping plugins
     */
    plugins: [
        // 'RuntimeAnalyzer',
        new ModuleMapper({
            getReadme(desc) {
                return path.join(__dirname, 'docs', 'components', desc.name.toLowerCase() + '.md');
            }
        }),

        'UIkitComponentMapper',
        'VueComponentMapper',
        'ComponentLinker',
        new MarkdownExporter({
            output: false
        }),
        new VuePressExporter({
            getMDFileName: desc => desc.name + '.md'
        }),
        new RuntimeAnalyzer(VueRunner.RTAConfig)
    ],

    // getResourceName: desc => desc.path
};