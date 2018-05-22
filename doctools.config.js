const path = require('path');
const AssetLinker = require('yootheme-doctools/src/plugins/AssetLinker.js');
const RuntimeAnalyzer = require('yootheme-doctools/src/plugins/RuntimeAnalyzer.js');
const DefaultLoader = require('yootheme-doctools/src/loaders/DefaultLoader.js');

module.exports = {

    include: [ 'src/js/@(core|mixin|util|components)/*', 'docs/**/*.md', 'package.json', 'README.md', 'tests/*.html'],

    exclude: [],

    base: __dirname,

    loaders: [
        'MarkdownLoader',
        () => new DefaultLoader({
            type: 'UIkitComponent',
            include: [__dirname + '/src/js/components/*.js', __dirname + '/src/js/mixin/*.js', __dirname + '/src/js/core/*.js'],
            exclude: ['src/js/core/core.js'],
            desc: {runtime: true}
        }),
        'DefaultLoader',
        new DefaultLoader({
            type: 'UIkitTest',
            include: __dirname + '/tests/*.html',
            member: 'html'
        })
    ],

     /**
     * extra mapping plugins
     */
    plugins: [
        new RuntimeAnalyzer({serve: false}),
        new AssetLinker({
            getAssets(desc) {

                const assets = AssetLinker.defaultConfig.getAssets(desc);
                assets.test = path.join(__dirname, 'tests', desc.name.toLowerCase() + '.html');

                if (desc.type === 'UIkitComponent') {
                    assets.readme = path.join(__dirname, 'docs', 'components', desc.name.toLowerCase() + '.md');
                }
                return assets;
            }
        }),
        // 'HeadlineMapper',
        'TypeMapper',
        'UIkitComponentMapper',
        'ComponentLinker',
        {
            onSerialize(desc, data) {
                if (desc.html) {
                    data.html = desc.html;
                }
            }
        }
    ],

};