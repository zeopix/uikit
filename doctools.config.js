const path = require('path');
const ModuleMapper = require('yootheme-doctools/src/plugins/ModuleMapper.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const DefaultLoader = require('yootheme-doctools/src/loaders/DefaultLoader.js');
const util = require('yootheme-doctools/src/util');

module.exports = {

    include: [__dirname + '/src/js/@(core|mixin|util|components)/*'],

    exclude: [],

    base: __dirname,

    menu: [
        {
            label: 'package',
            match: [ (file, desc) => desc.type === 'package']
        },
        {
            label: 'core',
            match: util.match.and('src/js/core/*.js', (file, {data}) => data.readme)
        },
        {
            label: 'components',
            match: ['src/js/components/*.js']
        },
        {
            label: 'utils',
            match: ['src/js/util/*.js']
        },
        {
            label: 'mixin',
            match: ['src/js/mixin/*.js']
        }
    ],

    menus: {
        menu: true
    },

    loaders: [
        'MarkdownLoader',
        () => new DefaultLoader({
            type: 'UIkitComponent',
            include: [__dirname + '/src/js/components/*.js', __dirname + '/src/js/mixin/*.js', __dirname + '/src/js/core/*.js'],
            exclude: ['src/js/core/core.js'],
            desc: {runtime: true}
        }),
        'DefaultLoader'
    ],

     /**
     * extra mapping plugins
     */
    plugins: [
        new RuntimeAnalyzer({
            serve: false
        }),

        new ModuleMapper({
            getAssets(desc) {
                return {readme: path.join(__dirname, 'docs', 'components', desc.name.toLowerCase() + '.md')};
            }
        }),
        'UIkitComponentMapper',
        'ComponentLinker'
    ],

    // getResourceName: desc => desc.name
};