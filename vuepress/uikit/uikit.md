# uikit

[![uikit banner](https://cloud.githubusercontent.com/assets/321047/21769911/474d7d9e-d681-11e6-9fe0-d95f8ccfd3a9.jpg)](http://getuikit.com/)

# UIkit

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/uikit/uikit)

UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces.

*   [Homepage](http://getuikit.com) \- Learn more about UIkit
*   [@getuikit](https://twitter.com/getuikit) \- Get the latest buzz on Twitter
*   [Gitter Chat](https://gitter.im/uikit/uikit) \- Join our developer chat on Gitter.

* * *

**UIkit is an Open Source project developed by YOOtheme.**  
  
 [![](http://yootheme.com/pro/images/logo.svg)](https://yootheme.com) 

* * *

## Getting started

You have the following options to get UIkit:

*   Download the [latest release](https://github.com/uikit/uikit/releases/latest) with pre-built CSS and JS.
*   Install with [Bower](https://bower.io) to get the pre-built CSS and JS, plus Less files to compile yourself. This is recommended when using UIkit for a typical web project: `bower install uikit`
*   Clone the repo to get all source files including build scripts: `git clone git://github.com/uikit/uikit.git`
*   Install with [Npm](https://npmjs.com) to get all source files as they are available on Github: `npm install uikit`
*   Directly load UIkit from [CDNJS](https://cdnjs.com): [https://cdnjs.com/libraries/uikit](https://cdnjs.com/libraries/uikit)

## Developers

To always have the newest version of UIkit, even before a release, you may want to build it from source. If you only want to integrate the Less sources in your own website, you should simply install the Bower package instead.

Clone the UIkit repository.

~~~
git clone git://github.com/uikit/uikit.git
cd uikit

~~~

Install the Node dependencies.

~~~
npm install

~~~

Build UIkit. The result will end up in the `dist/` folder.

~~~
npm run compile

~~~

You can also watch for file changes and re-compile automatically.

~~~
npm run watch

~~~

Compile dist in rtl mode (experimental).

~~~
npm run compile-rtl

~~~

## Contributing

Finding bugs, sending pull requests or improving our docs - any contribution is welcome and highly appreciated. To get started, head over to our [contribution guidelines](CONTRIBUTING.md). Thanks!

## Versioning

UIkit is maintained by using the [Semantic Versioning Specification (SemVer)](http://semver.org).

## Browser Support

<table><thead><tr><th><img src="https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome"></th><th><img src="https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox"></th><th><img src="https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge"></th><th><img src="https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE"></th><th><img src="https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari"></th><th><img src="https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera"></th></tr></thead><tbody><tr><td>Latest ✔</td><td>Latest ✔</td><td>Latest ✔</td><td>11+ ✔</td><td>9.1+ ✔</td><td>Latest ✔</td><td></td></tr></tbody></table>

Tested With  
[![BrowserStack](https://user-images.githubusercontent.com/355427/27389060-9f716c82-569d-11e7-923c-bd5fe7f1c55a.png)](https://www.browserstack.com)

## Copyright and License

Copyright [YOOtheme](https://yootheme.com) GmbH under the [MIT license](LICENSE.md).

UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces.

## install:

`npm i -D git+https://github.com/uikit/uikit.git`

## commands:

`npm run build-scss [make-dir src/scss/theme && make-dir src/scss/components && node build/scss]`

`npm run compile [yarn compile-less && yarn compile-js]`

`npm run compile-js [node build/build]`

`npm run compile-less [yarn icons && node build/less]`

`npm run compile-rtl [yarn compile-less rtl]`

`npm run icons [node build/icons]`

`npm run prefix [node build/prefix]`

`npm run scope [node build/scope]`

`npm run release [yarn compile && yarn compile-rtl && yarn build-scss && node build/release]`

`npm run watch [npm-watch]`

`npm run eslint [eslint src/js]`

`npm run eslint-fix [eslint --fix src/js]`

`npm run test [webpack-dev-server --inline --hot --watchContentBase && open http://localhost:8080/tests/]`

## code:

~~~javascript
{
  "name": "uikit",
  "title": "UIkit",
  "description": "UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces.",
  "version": "3.0.0-beta.42",
  "main": "dist/js/uikit.js",
  "style": "dist/css/uikit.css",
  "scripts": {
    "build-scss": "make-dir src/scss/theme && make-dir src/scss/components && node build/scss",
    "compile": "yarn compile-less && yarn compile-js",
    "compile-js": "node build/build",
    "compile-less": "yarn icons && node build/less",
    "compile-rtl": "yarn compile-less rtl",
    "icons": "node build/icons",
    "prefix": "node build/prefix",
    "scope": "node build/scope",
    "release": "yarn compile && yarn compile-rtl && yarn build-scss && node build/release",
    "watch": "npm-watch",
    "eslint": "eslint src/js",
    "eslint-fix": "eslint --fix src/js",
    "test": "webpack-dev-server --inline --hot --watchContentBase && open http://localhost:8080/tests/"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/uikit/uikit.git"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/uikit/uikit/issues"
  },
  "homepage": "https://getuikit.com",
  "devDependencies": {
    "archiver": "^2.0.3",
    "buble": "^0.19.3",
    "buble-loader": "^0.5.0",
    "circular-dependency-plugin": "^5.0.2",
    "clean-css": "^4.1.11",
    "eslint": "^4.18.2",
    "fs-extra": "^5.0.0",
    "glob": "^7.1.2",
    "inquirer": "^5.1.0",
    "less": "^2.7.2",
    "make-dir-cli": "^1.0.0",
    "minimist": "^1.2.0",
    "npm-watch": "github:dasdeck/npm-watch#46a8a36c61cfd998ed53d27f62eaf79e11c395b4",
    "postcss": "^6.0.22",
    "raw-loader": "^0.5.1",
    "rollup": "^0.58.2",
    "rollup-plugin-buble": "^0.19.2",
    "rollup-plugin-html": "^0.2.1",
    "rollup-plugin-import-alias": "^1.0.4",
    "rollup-plugin-json": "^2.3.0",
    "rollup-plugin-replace": "^2.0.0",
    "rtlcss": "^2.2.0",
    "shortid": "^2.2.8",
    "uglify-js": "^3.3.23",
    "uglifyjs-webpack-plugin": "^1.2.2",
    "webpack": "^4.6.0",
    "webpack-cli": "^2.1.2",
    "webpack-dev-server": "^3.1.3"
  },
  "watch": {
    "compile-js": "src/js/**/*.js",
    "compile-less": {
      "patterns": "**/*.less",
      "extensions": "less"
    }
  }
}

~~~

* * *

_source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./)_