/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lorem_ipsum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lorem_ipsum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lorem_ipsum__);


/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        attributes: {
            type: Object,
            private: true
        },
        classes: {
            type: Array,
            private: true
        },
        count: {
            type: Number,
            default: 1,
            min: 0,
            max: 100
        },
    },
    methods: {
        ipsum: function ipsum$1() {
            return __WEBPACK_IMPORTED_MODULE_0_lorem_ipsum___default()({count: Math.random() * 5 });
        }
    }
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var generator = function() {
  var options = (arguments.length) ? arguments[0] : {}
    , count = options.count || 1
    , units = options.units || 'sentences'
    , sentenceLowerBound = options.sentenceLowerBound || 5
    , sentenceUpperBound = options.sentenceUpperBound || 15
    , paragraphLowerBound = options.paragraphLowerBound || 3
    , paragraphUpperBound = options.paragraphUpperBound || 7
    , format = options.format || 'plain'
    , words = options.words || __webpack_require__(12).words
    , random = options.random || Math.random
    , suffix = options.suffix;
  if (!suffix) {
    var isNode = typeof module !== 'undefined' && module.exports;
    var isReactNative = typeof product !== 'undefined' && product.navigator === 'ReactNative';
    if (!isReactNative && isNode) {
      suffix = __webpack_require__(13).EOL;
    } else {
      suffix = '\n';
    }
  }
  units = simplePluralize(units.toLowerCase());
  var randomInteger = function(min, max) {
    return Math.floor(random() * (max - min + 1) + min);
  };
  var randomWord = function(words) {
    return words[randomInteger(0, words.length - 1)];
  };
  var randomSentence = function(words, lowerBound, upperBound) {
    var sentence = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};
    while (bounds.min < bounds.max) {
      sentence = sentence + ' ' + randomWord(words);
      bounds.min = bounds.min + 1;
    }
    if (sentence.length) {
      sentence = sentence.slice(1);
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    return sentence;
  };
  var randomParagraph = function(words, lowerBound, upperBound, sentenceLowerBound, sentenceUpperBound) {
    var paragraph = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};
    while (bounds.min < bounds.max) {
      paragraph = paragraph + '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
      bounds.min = bounds.min + 1;
    }
    if (paragraph.length) {
      paragraph = paragraph.slice(2);
      paragraph = paragraph + '.';
    }
    return paragraph;
  }
  var iter = 0
    , bounds = {min: 0, max: count}
    , string = ''
    , prefix = ''
    , openingTag
    , closingTag;
  if (format == 'html') {
    openingTag = '<p>';
    closingTag = '</p>';
  }
  while (bounds.min < bounds.max) {
    switch (units.toLowerCase()) {
      case 'words':
        string = string + ' ' + randomWord(words);
        break;
      case 'sentences':
        string = string + '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
        break;
      case 'paragraphs':
        var nextString = randomParagraph(words, paragraphLowerBound, paragraphUpperBound, sentenceLowerBound, sentenceUpperBound);
        if (format == 'html') {
          nextString = openingTag + nextString + closingTag;
          if (bounds.min < bounds.max - 1) {
            nextString = nextString + suffix; // Each paragraph on a new line
          }
        } else if (bounds.min < bounds.max - 1) {
          nextString = nextString + suffix + suffix; // Double-up the EOL character to make distinct paragraphs, like carriage return
        }
        string = string + nextString;
        break;
    }
    bounds.min = bounds.min + 1;
  }
  if (string.length) {
    var pos = 0;
    if (string.indexOf('. ') == 0) {
      pos = 2;
    } else if (string.indexOf('.') == 0 || string.indexOf(' ') == 0) {
      pos = 1;
    }
    string = string.slice(pos);
    if (units == 'sentences') {
      string = string + '.';
    }
  }
  return string;
};
function simplePluralize(string) {
  if (string.indexOf('s', string.length - 1) === -1) {
    return string + 's';
  }
  return string;
}
module.exports = generator;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_margin_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1317b301_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_margin_vue__ = __webpack_require__(14);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_margin_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1317b301_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_margin_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "tests/vue/tests/margin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1317b301", Component.options)
  } else {
    hotAPI.reload("data-v-1317b301", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_svg_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_769e6f21_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_svg_vue__ = __webpack_require__(21);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_svg_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_769e6f21_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_svg_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "tests/vue/tests/svg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-769e6f21", Component.options)
  } else {
    hotAPI.reload("data-v-769e6f21", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);



__WEBPACK_IMPORTED_MODULE_1_vue__["default"].config.silent = !false;
var app = new __WEBPACK_IMPORTED_MODULE_1_vue__["default"](Object.assign(__WEBPACK_IMPORTED_MODULE_0__app_vue__["a" /* default */]));
app.$mount('#app');


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_app_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fe616e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_app_vue__ = __webpack_require__(28);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_app_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fe616e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_app_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "tests/vue/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fe616e8", Component.options)
  } else {
    hotAPI.reload("data-v-4fe616e8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tests_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__castingInput_vue__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var components = Object.keys(__WEBPACK_IMPORTED_MODULE_0__tests_index__["a" /* default */]).reduce(function (res, name) {res[("uk-" + name)] = __WEBPACK_IMPORTED_MODULE_0__tests_index__["a" /* default */][name]; return res;}, {});
components.castingInput = __WEBPACK_IMPORTED_MODULE_1__castingInput_vue__["a" /* default */];

var hashVars = ['vuePropValues', 'attributes','classesValues', 'componentName'];
/* harmony default export */ __webpack_exports__["a"] = ({
    components: components,
    data: function data() {

        var res = {
            componentName: 'grid',
            attributes: {},
            vuePropValues: {},
            classesValues:  {},
            childClassesValues: {},
            debug: false
        };

        this.loadHash(res);
        return res
    },
    mounted: function mounted(){

        window.$app = this;

        this.loadComp();
        this.$watch('hash',this.makeHash, {deep:true});
        // window.onhashchange = () => {this.loadHash(),this.loadComp()};
    },

    methods: {
        loadHash: function loadHash(target) {
            if ( target === void 0 ) target = this;

            var data = JSON.parse(window.location.hash.replace('#','') || '{}') || {};
            hashVars.forEach(function (name) {
                target[name] = data[name] !== undefined ? data[name] : target[name];
            });
        },

        loadComp: function loadComp() {
                var this$1 = this;

                // this.attributes = {};
                /* debugger */;
                console.log('loading');
                var newAttributes = {};
                newAttributes[this.componentAttribute] = '';
                // this.$set(this.attributes, this.componentAttribute, '');
                Object.keys(this.component.options.props)
                    .forEach(function (name) {
       
                        var def = this$1.component.options.defaults[name];
                        var override = this$1.vueProps[name];

                        if(override && override.private) {
                            return;
                        }

                        if (override && override.default) {
                            def = override.default
                            def = typeof def === 'function' ? def() : def;
                        }

                        var validValue = !override || override.options && override.options[this$1.attributes[name]];

                        if (this$1.attributes[name] === undefined || !validValue) {
                            newAttributes[name] = def;
                        }

                    });

                this.attributes = newAttributes;    

                Object.keys(this.vueProps).forEach(function (name) {
                        var def = this$1.vueProps[name].default;
                        var value = typeof def === 'function' ? def() : def;
                        if (!this$1.vuePropValues) {
                            this$1.$set(this$1.vuePropValues, name, value);

                        }
                    });
                
                var newValues = {};
                Object.keys(this.classes).forEach(function (name) {
                    var available = this$1.classes[name];
                    var currentValue = this$1.classesValues[name];
                    newValues[name] = currentValue;
                    if (Array.isArray(available) && available.indexOf(currentValue) < 0) {
                        var index = Math.round(Math.random() * (available.length - 1));
                        newValues[name] = available[index];
                    }
                }); 
                this.classesValues = newValues;
        },

        makeHash: function makeHash() {
            window.location.hash = JSON.stringify(this.hash);

        },
        inputOptions: function inputOptions(name) {
            var this$1 = this;

            var opts = {name: name, type: this.getType(name)}
            if (this.vueProps[name]) {
                ['min','max','step'].forEach(function (opt) {
                    if (!UIkit.util.isUndefined(this$1.vueProps[name][opt])) {
                        opts[opt] = this$1.vueProps[name][opt];
                    }
                    });
             } 
             return opts;
        },
        getInputType: function getInputType(type) {
                     switch(type) {
                case Number:
                    return 'number';
                case Boolean:
                    return 'checkbox';
                default:
                    return 'text';
            }
        },

        getType: function getType(paramName) {

            var propOverrideType = this.getPropType(paramName);
            if (propOverrideType) {
                return propOverrideType;
            }

            return this.getInputType(this.component.options.props[paramName]);
        },

        getPropType: function getPropType(paramName) {
            if (this.vueProps[paramName]) {
                return this.getInputType(this.vueProps[paramName].type);
            }
        },

        getInheritedValues: function getInheritedValues(key, converter, comp, obj) {
            if ( converter === void 0 ) converter = null;
            if ( comp === void 0 ) comp = this.vueComp;
            if ( obj === void 0 ) obj = {};


            if(comp.extends) {
                this.getInheritedValues(key, converter, comp.extends, obj);
            }

                
            if(comp[key]) {
                Object.keys(comp[key]).forEach(function (name) {

                    var prop = comp[key][name];
                    var res = converter ? converter(prop) : prop;
                    if (typeof res !== 'undefined') {
                        obj[name] = res;
                    }
                });
            }

            return obj;

        }
    }, 
    computed: {
        hash: function hash() {
            var this$1 = this;

            var sets = [("comp=" + (this.componentName))];
            Object.keys(this.attributes).forEach(function (name) {
                sets.push((name + "=" + (this$1.attributes[name])));
            });
            return {vuePropValues: this.vuePropValues, componentName: this.componentName, attributes: this.attributeValues,classesValues: this.classesValues}
        },
        testCompName: function testCompName() {
            return ("uk-" + (this.componentName));
        },
        computedClasses: function computedClasses() {
            var this$1 = this;

            var res = [];
             Object.keys(this.classes).forEach(function (name) {
                var value = this$1.classesValues[name];
                var definition = this$1.classes[name];
                if(definition) {
                    if (value === true) {
                        res.push(this$1.classes[name]);
                } else if (typeof value === 'string') {
                    res.push(value);
                } else if (typeof value === 'undefined') {
                    // debugger;    
                    }
                }
            });
            return res;            
        },
        classes: function classes() {
            return this.getInheritedValues('classes');
        },

        childClasses: function childClasses() {
            return this.getInheritedValues('childClasses');
        },

        propsFiltered: function propsFiltered() {
        },

        attributeValues: function attributeValues() {
            var this$1 = this;

            var vals = Object.keys(this.component.options.props).concat([this.componentAttribute]).reduce(function (val, name) {val[name] = this$1.attributes[name]; return val;},{});
             return vals;
        },

        componentAttribute: function componentAttribute() {
            return ("uk-" + (this.componentName));
        },

        vueProps: function vueProps() {

            return this.getInheritedValues('props',function (prop) {
                if (true) {
                    if (Array.isArray(prop.options)) {
                        prop.options = prop.options.reduce(function (val, name) {val[name] = name; return val;}, {});
                    }
                    return prop;
                }
            });
        },

        vueComp: function vueComp() {
            return this.$options.components[this.testCompName];
        },

        component: function component() {
            return UIkit.components[this.componentName];
        },
    }
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__margin_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slideshow_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_vue__ = __webpack_require__(4);






/* harmony default export */ __webpack_exports__["a"] = ({
    grid: __WEBPACK_IMPORTED_MODULE_0__grid_vue__["a" /* default */],
    icon: __WEBPACK_IMPORTED_MODULE_1__icon_vue__["a" /* default */],
    margin: __WEBPACK_IMPORTED_MODULE_2__margin_vue__["a" /* default */],
    svg: __WEBPACK_IMPORTED_MODULE_4__svg_vue__["a" /* default */],
    slideshow: __WEBPACK_IMPORTED_MODULE_3__slideshow_vue__["a" /* default */]
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_grid_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9d6b414e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_grid_vue__ = __webpack_require__(17);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_grid_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9d6b414e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_grid_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "tests/vue/tests/grid.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9d6b414e", Component.options)
  } else {
    hotAPI.reload("data-v-9d6b414e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__margin_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__width_vue__ = __webpack_require__(15);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({

    name:'grid',
    
    extends: __WEBPACK_IMPORTED_MODULE_0__margin_vue__["a" /* default */],

    classes: {
         gutter:[
            "uk-grid-collapse",
            "uk-grid-small",
            "uk-grid-medium",
            "uk-grid-large"
        ],
        width: __WEBPACK_IMPORTED_MODULE_1__width_vue__["a" /* default */].classes.width,
        margin: false,
        
        divider: 'uk-grid-divider'
    }

});



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_component__ = __webpack_require__(1);
//
//
//
//
//
//
//
//



var classesMargin = [
            '-',
           'uk-margin',
           'uk-margin-top',
           'uk-margin-left',
           'uk-margin-bottom',
           'uk-margin-right',

            'uk-margin-small',
           'uk-margin-small-top',
           'uk-margin-small-left',
           'uk-margin-small-bottom',
           'uk-margin-small-right',
       
            'uk-margin-medium',
           'uk-margin-medium-top',
           'uk-margin-medium-left',
           'uk-margin-medium-bottom',
           'uk-margin-medium-right',
       
            'uk-margin-large',
           'uk-margin-large-top',
           'uk-margin-large-left',
           'uk-margin-large-bottom',
           'uk-margin-large-right',
       
            'uk-margin-xlarge',
           'uk-margin-xlarge-top',
           'uk-margin-xlarge-left',
           'uk-margin-xlarge-bottom',
           'uk-margin-xlarge-right',
       
            'uk-margin-remove',
           'uk-margin-remove-top',
           'uk-margin-remove-left',
           'uk-margin-remove-bottom',
           'uk-margin-remove-right',
           'uk-margin-remove-vertical',
           'uk-margin-remove-adjacent',
       
            'uk-margin-auto',
           'uk-margin-auto-top',
           'uk-margin-auto-left',
           'uk-margin-auto-bottom',
           'uk-margin-auto-right',
           'uk-margin-auto-vertical' ];

/* harmony default export */ __webpack_exports__["a"] = ({

    name:'margin',
    
    extends: __WEBPACK_IMPORTED_MODULE_0__base_component__["a" /* default */],

    classes: {
       margin: classesMargin
        
    },

    props: {
        margin: {
            options:classesMargin.filter(function (name) { return name.indexOf('top') >= 0 && name.indexOf('remove') < 0; })
        }
    }
    
});



/***/ }),
/* 12 */
/***/ (function(module, exports) {


var dictionary = {
  words: [
    'ad',
    'adipisicing',
    'aliqua',
    'aliquip',
    'amet',
    'anim',
    'aute',
    'cillum',
    'commodo',
    'consectetur',
    'consequat',
    'culpa',
    'cupidatat',
    'deserunt',
    'do',
    'dolor',
    'dolore',
    'duis',
    'ea',
    'eiusmod',
    'elit',
    'enim',
    'esse',
    'est',
    'et',
    'eu',
    'ex',
    'excepteur',
    'exercitation',
    'fugiat',
    'id',
    'in',
    'incididunt',
    'ipsum',
    'irure',
    'labore',
    'laboris',
    'laborum',
    'Lorem',
    'magna',
    'minim',
    'mollit',
    'nisi',
    'non',
    'nostrud',
    'nulla',
    'occaecat',
    'officia',
    'pariatur',
    'proident',
    'qui',
    'quis',
    'reprehenderit',
    'sint',
    'sit',
    'sunt',
    'tempor',
    'ullamco',
    'ut',
    'velit',
    'veniam',
    'voluptate'  
  ]
};
module.exports = dictionary;


/***/ }),
/* 13 */
/***/ (function(module, exports) {


exports.endianness = function () { return 'LE' };
exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};
exports.loadavg = function () { return [] };
exports.uptime = function () { return 0 };
exports.freemem = function () {
    return Number.MAX_VALUE;
};
exports.totalmem = function () {
    return Number.MAX_VALUE;
};
exports.cpus = function () { return [] };
exports.type = function () { return 'Browser' };
exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};
exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };
exports.arch = function () { return 'javascript' };
exports.platform = function () { return 'browser' };
exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};
exports.EOL = '\n';
exports.homedir = function () {
	return '/'
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._b({}, "div", _vm.attributes, false),
    _vm._l(_vm.count, function(n) {
      return _c("div", [
        _c("div", {
          staticClass: "uk-card uk-card-default uk-card-body",
          class: _vm.classes,
          domProps: { innerHTML: _vm._s(_vm.ipsum()) }
        })
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1317b301", esExports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_width_vue__ = __webpack_require__(16);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_width_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "tests/vue/tests/width.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b3ce843", Component.options)
  } else {
    hotAPI.reload("data-v-2b3ce843", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  classes:{
      width: [
            'uk-child-width-auto',
            'uk-child-width-expand',
            'uk-child-width-1-2',
            'uk-child-width-1-3',
            'uk-child-width-1-4',
            'uk-child-width-1-5',
            'uk-child-width-1-6'
        ]
  },
  widthchildClasses: {
        width:[
            'uk-width-auto',
            'uk-width-expand',

            'uk-width-small',
            'uk-width-medium',
            'uk-width-large',
            'uk-width-xlarge',
            'uk-width-xxlarge',

            'uk-child-width-1-1',
            'uk-child-width-1-2',
            'uk-child-width-1-3',
            'uk-child-width-2-3',
            'uk-child-width-1-4',
            'uk-child-width-2-4',
            'uk-child-width-3-4',
            'uk-child-width-1-5',
            'uk-child-width-2-5',
            'uk-child-width-3-5',
            'uk-child-width-4-5',
            'uk-child-width-1-6',
            'uk-child-width-2-6',
            'uk-child-width-3-6',
            'uk-child-width-4-6',
            'uk-child-width-5-6'
        ]
    }
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._b({ class: _vm.classes }, "div", _vm.attributes, false),
    _vm._l(_vm.count, function(n) {
      return _c("div", [
        _c("div", {
          staticClass: "uk-card uk-card-default uk-card-body",
          domProps: { innerHTML: _vm._s(_vm.ipsum()) }
        })
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9d6b414e", esExports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_icon_vue__ = __webpack_require__(19);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_icon_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "tests/vue/tests/icon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72593f0c", Component.options)
  } else {
    hotAPI.reload("data-v-72593f0c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lorem_ipsum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lorem_ipsum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lorem_ipsum__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_vue__ = __webpack_require__(4);
//




/* harmony default export */ __webpack_exports__["a"] = ({

    name:'icon',
    
    extends: __WEBPACK_IMPORTED_MODULE_1__svg_vue__["a" /* default */],

    props: {
        
        icon: {
            type: String,
            default: 'home',
            options: [].concat(UIkit.icon.list())
        },
        id: {
            private: true
        }
    }
});



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lorem_ipsum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lorem_ipsum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lorem_ipsum__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({

    name:'svg',
    
    extends: __WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* default */],

    props: {
        src:{
            type: String,
            options: {
                'Image': '../../src/images/components/navbar-toggle-icon.svg',
                'Symbol+ID': '../images/icons.svg#table',
                'Symbol+ID+notfound': '../images/icons.svg#notfound'
            }
        },
        ratio: {
            type: Number,
            default: 1,
            min: 0.1,
            max: 10,
            step: 0.1
        }
        
    }
});



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "uk-container" },
    _vm._l(parseInt(_vm.count), function(n) {
      return _c("div", [
        _c("span", [_vm._v(_vm._s(n))]),
        _vm._v(" "),
        _c("div", _vm._b({ class: _vm.classes }, "div", _vm.attributes, false))
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-769e6f21", esExports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_slideshow_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c46242b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_slideshow_vue__ = __webpack_require__(24);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_slideshow_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c46242b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_slideshow_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "tests/vue/tests/slideshow.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c46242b", Component.options)
  } else {
    hotAPI.reload("data-v-4c46242b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_component__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'slideshow',

    extends: __WEBPACK_IMPORTED_MODULE_0__base_component__["a" /* default */],
    props: {
        animation: {
            default: 'slide',
            options: [ 'slide', 'fade', 'scale', 'pull', 'push' ]
        }
    },
    methods:{
        image: function image(i) {
            return ["avatar.jpg","dark.jpg","light.jpg","photo.jpg","size-h.jpg","size-v.jpg","size1.jpg","size2.jpg"][i % ["avatar.jpg","dark.jpg","light.jpg","photo.jpg","size-h.jpg","size-v.jpg","size1.jpg","size2.jpg"].length];
        }
    }

    
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "js-slideshow-animation",
      attrs: { "uk-slideshow": "ratio: 3:2; autoplay: 1" }
    },
    [
      _c(
        "div",
        { staticClass: "uk-position-relative uk-visible-toggle uk-light" },
        [
          _c(
            "ul",
            { staticClass: "uk-slideshow-items" },
            _vm._l(_vm.count, function(n) {
              return _c("li", [
                _c("img", {
                  attrs: {
                    src: "../images/" + _vm.image(n),
                    alt: "",
                    "uk-cover": ""
                  }
                }),
                _vm._v(" "),
                _vm._m(0, true)
              ])
            })
          ),
          _vm._v(" "),
          _c("a", {
            staticClass:
              "uk-position-center-left uk-position-small uk-hidden-hover",
            attrs: {
              "uk-slidenav-previous": "",
              "uk-slideshow-item": "previous"
            }
          }),
          _vm._v(" "),
          _c("a", {
            staticClass:
              "uk-position-center-right uk-position-small uk-hidden-hover",
            attrs: { "uk-slidenav-next": "", "uk-slideshow-item": "next" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "uk-dotnav uk-flex-center uk-margin" },
        _vm._l(_vm.count, function(n) {
          return _c("li", { attrs: { "uk-slideshow-item": n } }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Item " + _vm._s(n))])
          ])
        })
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "uk-position-center uk-position-small uk-text-center" },
      [
        _c("h2", { attrs: { "uk-slideshow-parallax": "x: 100,-100" } }, [
          _vm._v("Heading")
        ]),
        _vm._v(" "),
        _c("p", { attrs: { "uk-slideshow-parallax": "x: 200,-200" } }, [
          _vm._v("Lorem ipsum dolor sit amet.")
        ])
      ]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c46242b", esExports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_castingInput_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8cde4528_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_castingInput_vue__ = __webpack_require__(27);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__buble_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_castingInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8cde4528_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_castingInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "tests/vue/castingInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8cde4528", Component.options)
  } else {
    hotAPI.reload("data-v-8cde4528", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        type: {
            required:true,
            type: String
        },
        value:{
            required:true
        },
        config: {
            required: true,
            type: Object
        }
    },
    hidden: true,
    methods:{
        change: function change(e) {
            switch(this.config.type) {
                case 'number':
                    this.$emit('input', parseFloat(e.target.value));
                    break;
                case 'checkbox': {
                    this.$emit('input', e.target.checked);
                    break;
                }
                default:
                    this.$emit('input', e.target.value);
            }
        }
    }
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.type === "checkbox"
    ? _c(
        "input",
        _vm._b(
          {
            attrs: { type: _vm.type },
            domProps: { checked: _vm.value },
            on: { change: _vm.change }
          },
          "input",
          _vm.config,
          false
        )
      )
    : _c(
        "input",
        _vm._b(
          { domProps: { value: _vm.value }, on: { input: _vm.change } },
          "input",
          _vm.config,
          false
        )
      )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8cde4528", esExports)
  }
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "uk-container" }, [
    _c("section", [
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.componentName,
              expression: "componentName"
            }
          ],
          on: {
            change: [
              function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.componentName = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
              function($event) {
                _vm.loadComp(), _vm.makeHash()
              }
            ]
          }
        },
        _vm._l(_vm.$options.components, function(obj, name) {
          return !obj.hidden
            ? _c("option", {
                domProps: { value: obj.name, innerHTML: _vm._s(name) }
              })
            : _vm._e()
        })
      )
    ]),
    _vm._v(" "),
    _c("h2", [_vm._v("classes")]),
    _vm._v(" "),
    _c(
      "section",
      [
        _vm._l(_vm.classes, function(param, name) {
          return param
            ? _c("div", [
                _c("label", {
                  attrs: { for: name },
                  domProps: { innerHTML: _vm._s(name + ":") }
                }),
                _vm._v(" "),
                Array.isArray(param)
                  ? _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.classesValues[name],
                            expression: "classesValues[name]"
                          }
                        ],
                        attrs: { name: name },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.classesValues,
                              name,
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(param, function(val) {
                        return _c("option", {
                          domProps: { value: val, innerHTML: _vm._s(val) }
                        })
                      })
                    )
                  : _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.classesValues[name],
                          expression: "classesValues[name]"
                        }
                      ],
                      attrs: { name: name, type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.classesValues[name])
                          ? _vm._i(_vm.classesValues[name], null) > -1
                          : _vm.classesValues[name]
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.classesValues[name],
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.classesValues[name] = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.classesValues[name] = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.$set(_vm.classesValues, name, $$c)
                          }
                        }
                      }
                    })
              ])
            : _vm._e()
        }),
        _vm._v(" "),
        _c("h2", [_vm._v("attributes")]),
        _vm._v(" "),
        _vm._l(_vm.attributes, function(param, name) {
          return _vm.component.options.props[name] &&
            name !== _vm.componentAttribute
            ? _c(
                "div",
                [
                  _c("label", {
                    attrs: { for: name },
                    domProps: { innerHTML: _vm._s(name + ":") }
                  }),
                  _vm._v(" "),
                  _vm.vueProps[name] && _vm.vueProps[name].options
                    ? _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.attributes[name],
                              expression: "attributes[name]"
                            }
                          ],
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.attributes,
                                name,
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.vueProps[name].options, function(
                          option,
                          key
                        ) {
                          return _c("option", {
                            domProps: { value: option, innerHTML: _vm._s(key) }
                          })
                        })
                      )
                    : _c("castingInput", {
                        attrs: {
                          type: _vm.getType(name),
                          config: _vm.inputOptions(name)
                        },
                        model: {
                          value: _vm.attributes[name],
                          callback: function($$v) {
                            _vm.$set(_vm.attributes, name, $$v)
                          },
                          expression: "attributes[name]"
                        }
                      })
                ],
                1
              )
            : _vm._e()
        }),
        _vm._v(" "),
        _c("h2", [_vm._v("content")]),
        _vm._v(" "),
        _vm._l(_vm.vueProps, function(param, name) {
          return !_vm.component.options.props[name] &&
            !(_vm.vueProps[name] && _vm.vueProps[name].private)
            ? _c(
                "div",
                [
                  _c("label", {
                    attrs: { for: name },
                    domProps: { innerHTML: _vm._s(name + ":") }
                  }),
                  _vm._v(" "),
                  _c("castingInput", {
                    attrs: {
                      type: _vm.getType(name),
                      config: _vm.inputOptions(name)
                    },
                    model: {
                      value: _vm.vuePropValues[name],
                      callback: function($$v) {
                        _vm.$set(_vm.vuePropValues, name, $$v)
                      },
                      expression: "vuePropValues[name]"
                    }
                  })
                ],
                1
              )
            : _vm._e()
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "section",
      [
        _c(
          _vm.testCompName,
          _vm._b(
            {
              tag: "component",
              attrs: {
                attributes: _vm.attributeValues,
                classes: _vm.computedClasses
              }
            },
            "component",
            _vm.vuePropValues,
            false
          )
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4fe616e8", esExports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

throw new Error("Module build failed: RangeError: Maximum call stack size exceeded\n    at RegExp.[Symbol.match] (<anonymous>)\n    at String.match (native)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:88:25)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)\n    at getRules (/Applications/MAMP/htdocs/uikit/node_modules/webpack-preprocessor/index.js:142:5)");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzUzOWEzNWIwNzdlNGQ2Y2ZiZGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Rlc3RzL3Z1ZS9iYXNlL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vbGliL2dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvdGVzdHMvbWFyZ2luLnZ1ZT82MzQxIiwid2VicGFjazovLy8uL3Rlc3RzL3Z1ZS90ZXN0cy9zdmcudnVlPzcwZDkiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvdnVlL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvYXBwLnZ1ZT8yNWU3Iiwid2VicGFjazovLy8uL3Rlc3RzL3Z1ZS9hcHAudnVlIiwid2VicGFjazovLy8uL3Rlc3RzL3Z1ZS90ZXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvdGVzdHMvZ3JpZC52dWU/Yzc0MyIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvdGVzdHMvZ3JpZC52dWUiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvdnVlL3Rlc3RzL21hcmdpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2xpYi9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vcy1icm93c2VyaWZ5L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvdnVlL3Rlc3RzL21hcmdpbi52dWU/OTc3NiIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvdGVzdHMvd2lkdGgudnVlPzQyYmMiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvdnVlL3Rlc3RzL3dpZHRoLnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvdGVzdHMvZ3JpZC52dWU/NjY0YiIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvdGVzdHMvaWNvbi52dWU/NDVjMCIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvdGVzdHMvaWNvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvdnVlL3Rlc3RzL3N2Zy52dWUiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvdnVlL3Rlc3RzL3N2Zy52dWU/ZGM2ZCIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvdGVzdHMvc2xpZGVzaG93LnZ1ZT8wZTdiIiwid2VicGFjazovLy8uL3Rlc3RzL3Z1ZS90ZXN0cy9zbGlkZXNob3cudnVlIiwid2VicGFjazovLy8uL3Rlc3RzL3Z1ZS90ZXN0cy9zbGlkZXNob3cudnVlP2E5YzYiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvdnVlL2Nhc3RpbmdJbnB1dC52dWU/NTgxZiIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvY2FzdGluZ0lucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZXN0cy92dWUvY2FzdGluZ0lucHV0LnZ1ZT82YmRkIiwid2VicGFjazovLy8uL3Rlc3RzL3Z1ZS9hcHAudnVlPzEwODIiXSwibmFtZXMiOlsiY29uc3QiLCJ0aGlzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiLi90ZXN0cy92dWUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNTM5YTM1YjA3N2U0ZDZjZmJkZSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5pbXBvcnQgaXBzdW0gZnJvbSAnbG9yZW0taXBzdW0nO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHByaXZhdGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBwcml2YXRlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNvdW50OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDBcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaXBzdW0oKSB7XG4gICAgICAgICAgICByZXR1cm4gaXBzdW0oe2NvdW50OiBNYXRoLnJhbmRvbSgpICogNSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0cy92dWUvYmFzZS9jb21wb25lbnQuanMiLCJcbnZhciBnZW5lcmF0b3IgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG9wdGlvbnMgPSAoYXJndW1lbnRzLmxlbmd0aCkgPyBhcmd1bWVudHNbMF0gOiB7fVxuICAgICwgY291bnQgPSBvcHRpb25zLmNvdW50IHx8IDFcbiAgICAsIHVuaXRzID0gb3B0aW9ucy51bml0cyB8fCAnc2VudGVuY2VzJ1xuICAgICwgc2VudGVuY2VMb3dlckJvdW5kID0gb3B0aW9ucy5zZW50ZW5jZUxvd2VyQm91bmQgfHwgNVxuICAgICwgc2VudGVuY2VVcHBlckJvdW5kID0gb3B0aW9ucy5zZW50ZW5jZVVwcGVyQm91bmQgfHwgMTVcbiAgICAsIHBhcmFncmFwaExvd2VyQm91bmQgPSBvcHRpb25zLnBhcmFncmFwaExvd2VyQm91bmQgfHwgM1xuICAgICwgcGFyYWdyYXBoVXBwZXJCb3VuZCA9IG9wdGlvbnMucGFyYWdyYXBoVXBwZXJCb3VuZCB8fCA3XG4gICAgLCBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCAncGxhaW4nXG4gICAgLCB3b3JkcyA9IG9wdGlvbnMud29yZHMgfHwgcmVxdWlyZSgnLi9kaWN0aW9uYXJ5Jykud29yZHNcbiAgICAsIHJhbmRvbSA9IG9wdGlvbnMucmFuZG9tIHx8IE1hdGgucmFuZG9tXG4gICAgLCBzdWZmaXggPSBvcHRpb25zLnN1ZmZpeDtcbiAgaWYgKCFzdWZmaXgpIHtcbiAgICB2YXIgaXNOb2RlID0gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHM7XG4gICAgdmFyIGlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgcHJvZHVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvZHVjdC5uYXZpZ2F0b3IgPT09ICdSZWFjdE5hdGl2ZSc7XG4gICAgaWYgKCFpc1JlYWN0TmF0aXZlICYmIGlzTm9kZSkge1xuICAgICAgc3VmZml4ID0gcmVxdWlyZSgnb3MnKS5FT0w7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1ZmZpeCA9ICdcXG4nO1xuICAgIH1cbiAgfVxuICB1bml0cyA9IHNpbXBsZVBsdXJhbGl6ZSh1bml0cy50b0xvd2VyQ2FzZSgpKTtcbiAgdmFyIHJhbmRvbUludGVnZXIgPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgfTtcbiAgdmFyIHJhbmRvbVdvcmQgPSBmdW5jdGlvbih3b3Jkcykge1xuICAgIHJldHVybiB3b3Jkc1tyYW5kb21JbnRlZ2VyKDAsIHdvcmRzLmxlbmd0aCAtIDEpXTtcbiAgfTtcbiAgdmFyIHJhbmRvbVNlbnRlbmNlID0gZnVuY3Rpb24od29yZHMsIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgICB2YXIgc2VudGVuY2UgPSAnJ1xuICAgICAgLCBib3VuZHMgPSB7bWluOiAwLCBtYXg6IHJhbmRvbUludGVnZXIobG93ZXJCb3VuZCwgdXBwZXJCb3VuZCl9O1xuICAgIHdoaWxlIChib3VuZHMubWluIDwgYm91bmRzLm1heCkge1xuICAgICAgc2VudGVuY2UgPSBzZW50ZW5jZSArICcgJyArIHJhbmRvbVdvcmQod29yZHMpO1xuICAgICAgYm91bmRzLm1pbiA9IGJvdW5kcy5taW4gKyAxO1xuICAgIH1cbiAgICBpZiAoc2VudGVuY2UubGVuZ3RoKSB7XG4gICAgICBzZW50ZW5jZSA9IHNlbnRlbmNlLnNsaWNlKDEpO1xuICAgICAgc2VudGVuY2UgPSBzZW50ZW5jZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHNlbnRlbmNlLnNsaWNlKDEpO1xuICAgIH1cbiAgICByZXR1cm4gc2VudGVuY2U7XG4gIH07XG4gIHZhciByYW5kb21QYXJhZ3JhcGggPSBmdW5jdGlvbih3b3JkcywgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCwgc2VudGVuY2VMb3dlckJvdW5kLCBzZW50ZW5jZVVwcGVyQm91bmQpIHtcbiAgICB2YXIgcGFyYWdyYXBoID0gJydcbiAgICAgICwgYm91bmRzID0ge21pbjogMCwgbWF4OiByYW5kb21JbnRlZ2VyKGxvd2VyQm91bmQsIHVwcGVyQm91bmQpfTtcbiAgICB3aGlsZSAoYm91bmRzLm1pbiA8IGJvdW5kcy5tYXgpIHtcbiAgICAgIHBhcmFncmFwaCA9IHBhcmFncmFwaCArICcuICcgKyByYW5kb21TZW50ZW5jZSh3b3Jkcywgc2VudGVuY2VMb3dlckJvdW5kLCBzZW50ZW5jZVVwcGVyQm91bmQpO1xuICAgICAgYm91bmRzLm1pbiA9IGJvdW5kcy5taW4gKyAxO1xuICAgIH1cbiAgICBpZiAocGFyYWdyYXBoLmxlbmd0aCkge1xuICAgICAgcGFyYWdyYXBoID0gcGFyYWdyYXBoLnNsaWNlKDIpO1xuICAgICAgcGFyYWdyYXBoID0gcGFyYWdyYXBoICsgJy4nO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYWdyYXBoO1xuICB9XG4gIHZhciBpdGVyID0gMFxuICAgICwgYm91bmRzID0ge21pbjogMCwgbWF4OiBjb3VudH1cbiAgICAsIHN0cmluZyA9ICcnXG4gICAgLCBwcmVmaXggPSAnJ1xuICAgICwgb3BlbmluZ1RhZ1xuICAgICwgY2xvc2luZ1RhZztcbiAgaWYgKGZvcm1hdCA9PSAnaHRtbCcpIHtcbiAgICBvcGVuaW5nVGFnID0gJzxwPic7XG4gICAgY2xvc2luZ1RhZyA9ICc8L3A+JztcbiAgfVxuICB3aGlsZSAoYm91bmRzLm1pbiA8IGJvdW5kcy5tYXgpIHtcbiAgICBzd2l0Y2ggKHVuaXRzLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGNhc2UgJ3dvcmRzJzpcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgJyAnICsgcmFuZG9tV29yZCh3b3Jkcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VudGVuY2VzJzpcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgJy4gJyArIHJhbmRvbVNlbnRlbmNlKHdvcmRzLCBzZW50ZW5jZUxvd2VyQm91bmQsIHNlbnRlbmNlVXBwZXJCb3VuZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFyYWdyYXBocyc6XG4gICAgICAgIHZhciBuZXh0U3RyaW5nID0gcmFuZG9tUGFyYWdyYXBoKHdvcmRzLCBwYXJhZ3JhcGhMb3dlckJvdW5kLCBwYXJhZ3JhcGhVcHBlckJvdW5kLCBzZW50ZW5jZUxvd2VyQm91bmQsIHNlbnRlbmNlVXBwZXJCb3VuZCk7XG4gICAgICAgIGlmIChmb3JtYXQgPT0gJ2h0bWwnKSB7XG4gICAgICAgICAgbmV4dFN0cmluZyA9IG9wZW5pbmdUYWcgKyBuZXh0U3RyaW5nICsgY2xvc2luZ1RhZztcbiAgICAgICAgICBpZiAoYm91bmRzLm1pbiA8IGJvdW5kcy5tYXggLSAxKSB7XG4gICAgICAgICAgICBuZXh0U3RyaW5nID0gbmV4dFN0cmluZyArIHN1ZmZpeDsgLy8gRWFjaCBwYXJhZ3JhcGggb24gYSBuZXcgbGluZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChib3VuZHMubWluIDwgYm91bmRzLm1heCAtIDEpIHtcbiAgICAgICAgICBuZXh0U3RyaW5nID0gbmV4dFN0cmluZyArIHN1ZmZpeCArIHN1ZmZpeDsgLy8gRG91YmxlLXVwIHRoZSBFT0wgY2hhcmFjdGVyIHRvIG1ha2UgZGlzdGluY3QgcGFyYWdyYXBocywgbGlrZSBjYXJyaWFnZSByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyBuZXh0U3RyaW5nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgYm91bmRzLm1pbiA9IGJvdW5kcy5taW4gKyAxO1xuICB9XG4gIGlmIChzdHJpbmcubGVuZ3RoKSB7XG4gICAgdmFyIHBvcyA9IDA7XG4gICAgaWYgKHN0cmluZy5pbmRleE9mKCcuICcpID09IDApIHtcbiAgICAgIHBvcyA9IDI7XG4gICAgfSBlbHNlIGlmIChzdHJpbmcuaW5kZXhPZignLicpID09IDAgfHwgc3RyaW5nLmluZGV4T2YoJyAnKSA9PSAwKSB7XG4gICAgICBwb3MgPSAxO1xuICAgIH1cbiAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UocG9zKTtcbiAgICBpZiAodW5pdHMgPT0gJ3NlbnRlbmNlcycpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZyArICcuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cmluZztcbn07XG5mdW5jdGlvbiBzaW1wbGVQbHVyYWxpemUoc3RyaW5nKSB7XG4gIGlmIChzdHJpbmcuaW5kZXhPZigncycsIHN0cmluZy5sZW5ndGggLSAxKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gc3RyaW5nICsgJ3MnO1xuICB9XG4gIHJldHVybiBzdHJpbmc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2xpYi9nZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYnVibGUtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wJmJ1c3RDYWNoZSEuL21hcmdpbi52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTEzMTdiMzAxXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL21hcmdpbi52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZXN0cy92dWUvdGVzdHMvbWFyZ2luLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7ICByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkgeyAgY29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTMxN2IzMDFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xMzE3YjMwMVwiLCBDb21wb25lbnQub3B0aW9ucylcbicgKyAnICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVzdHMvdnVlL3Rlc3RzL21hcmdpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYnVibGUtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wJmJ1c3RDYWNoZSEuL3N2Zy52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc2OWU2ZjIxXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3N2Zy52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZXN0cy92dWUvdGVzdHMvc3ZnLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7ICByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkgeyAgY29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzY5ZTZmMjFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NjllNmYyMVwiLCBDb21wb25lbnQub3B0aW9ucylcbicgKyAnICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVzdHMvdnVlL3Rlc3RzL3N2Zy52dWVcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLnZ1ZSc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5WdWUuY29uZmlnLnNpbGVudCA9ICFERUJVRztcbmNvbnN0IGFwcCA9IG5ldyBWdWUoT2JqZWN0LmFzc2lnbihBcHApKTtcbmFwcC4kbW91bnQoJyNhcHAnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3RzL3Z1ZS9hcHAuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFidWJsZS1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAmYnVzdENhY2hlIS4vYXBwLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGZlNjE2ZThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vYXBwLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlc3RzL3Z1ZS9hcHAudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgIHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7ICBjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00ZmU2MTZlOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRmZTYxNmU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuJyArICcgIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90ZXN0cy92dWUvYXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuXG5pbXBvcnQgdGVzdENvbXBvbmVudHMgZnJvbSAnLi90ZXN0cy9pbmRleCc7XG5pbXBvcnQgY2FzdGluZ0lucHV0IGZyb20gJy4vY2FzdGluZ0lucHV0LnZ1ZSc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBPYmplY3Qua2V5cyh0ZXN0Q29tcG9uZW50cykucmVkdWNlKChyZXMsIG5hbWUpID0+IHtyZXNbYHVrLSR7bmFtZX1gXSA9IHRlc3RDb21wb25lbnRzW25hbWVdOyByZXR1cm4gcmVzO30sIHt9KTtcbmNvbXBvbmVudHMuY2FzdGluZ0lucHV0ID0gY2FzdGluZ0lucHV0O1xuXG5jb25zdCBoYXNoVmFycyA9IFsndnVlUHJvcFZhbHVlcycsICdhdHRyaWJ1dGVzJywnY2xhc3Nlc1ZhbHVlcycsICdjb21wb25lbnROYW1lJ107XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50cyxcbiAgICBkYXRhKCnCoHtcblxuICAgICAgICBjb25zdCByZXMgPSB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiAnZ3JpZCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgICAgIHZ1ZVByb3BWYWx1ZXM6IHt9LFxuICAgICAgICAgICAgY2xhc3Nlc1ZhbHVlczogwqB7fSxcbiAgICAgICAgICAgIGNoaWxkQ2xhc3Nlc1ZhbHVlczoge30sXG4gICAgICAgICAgICBkZWJ1ZzogREVCVUdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxvYWRIYXNoKHJlcyk7XG4gICAgICAgIHJldHVybiByZXNcbiAgICB9LFxuICAgIG1vdW50ZWQoKXtcblxuICAgICAgICB3aW5kb3cuJGFwcCA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5sb2FkQ29tcCgpO1xuICAgICAgICB0aGlzLiR3YXRjaCgnaGFzaCcsdGhpcy5tYWtlSGFzaCwge2RlZXA6dHJ1ZX0pO1xuICAgICAgICAvLyB3aW5kb3cub25oYXNoY2hhbmdlID0gKCkgPT4ge3RoaXMubG9hZEhhc2goKSx0aGlzLmxvYWRDb21wKCl9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWRIYXNoKHRhcmdldCA9IHRoaXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCcnKSB8fMKgJ3t9JykgfHwge307XG4gICAgICAgICAgICBoYXNoVmFycy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGRhdGFbbmFtZV0gIT09IHVuZGVmaW5lZCA/IGRhdGFbbmFtZV0gOiB0YXJnZXRbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2FkQ29tcCgpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAvKiBkZWJ1Z2dlciAqLztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0F0dHJpYnV0ZXMgPSB7W3RoaXMuY29tcG9uZW50QXR0cmlidXRlXTonJ307XG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kc2V0KHRoaXMuYXR0cmlidXRlcywgdGhpcy5jb21wb25lbnRBdHRyaWJ1dGUsICcnKTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudC5vcHRpb25zLnByb3BzKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWYgPSB0aGlzLmNvbXBvbmVudC5vcHRpb25zLmRlZmF1bHRzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGUgPSB0aGlzLnZ1ZVByb3BzW25hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvdmVycmlkZSAmJiBvdmVycmlkZS5wcml2YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGUgJiYgb3ZlcnJpZGUuZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZiA9IG92ZXJyaWRlLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWYgPSB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nID8gZGVmKCkgOiBkZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkVmFsdWUgPSAhb3ZlcnJpZGUgfHwgb3ZlcnJpZGUub3B0aW9ucyAmJiBvdmVycmlkZS5vcHRpb25zW3RoaXMuYXR0cmlidXRlc1tuYW1lXV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXNbbmFtZV0gPT09IHVuZGVmaW5lZCB8fCAhdmFsaWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0F0dHJpYnV0ZXNbbmFtZV0gPSBkZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBuZXdBdHRyaWJ1dGVzOyAgICBcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMudnVlUHJvcHMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWYgPSB0aGlzLnZ1ZVByb3BzW25hbWVdLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgPyBkZWYoKSA6IGRlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy52dWVQcm9wVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudnVlUHJvcFZhbHVlcywgbmFtZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2xhc3NlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gdGhpcy5jbGFzc2VzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmNsYXNzZXNWYWx1ZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1tuYW1lXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXZhaWxhYmxlKSAmJiBhdmFpbGFibGUuaW5kZXhPZihjdXJyZW50VmFsdWUpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoYXZhaWxhYmxlLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1tuYW1lXSA9IGF2YWlsYWJsZVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc2VzVmFsdWVzID0gbmV3VmFsdWVzO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ha2VIYXNoKCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBKU09OLnN0cmluZ2lmeSh0aGlzLmhhc2gpO1xuXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0T3B0aW9ucyhuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRzID0ge25hbWUsIHR5cGU6IHRoaXMuZ2V0VHlwZShuYW1lKX1cbiAgICAgICAgICAgIGlmICh0aGlzLnZ1ZVByb3BzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgWydtaW4nLCdtYXgnLCdzdGVwJ10uZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIVVJa2l0LnV0aWwuaXNVbmRlZmluZWQodGhpcy52dWVQcm9wc1tuYW1lXVtvcHRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0c1tvcHRdID0gdGhpcy52dWVQcm9wc1tuYW1lXVtvcHRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgcmV0dXJuIG9wdHM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldElucHV0VHlwZSh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3RleHQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldFR5cGUocGFyYW1OYW1lKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb3BPdmVycmlkZVR5cGUgPSB0aGlzLmdldFByb3BUeXBlKHBhcmFtTmFtZSk7XG4gICAgICAgICAgICBpZiAocHJvcE92ZXJyaWRlVHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wT3ZlcnJpZGVUeXBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnB1dFR5cGUodGhpcy5jb21wb25lbnQub3B0aW9ucy5wcm9wc1twYXJhbU5hbWVdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRQcm9wVHlwZShwYXJhbU5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZ1ZVByb3BzW3BhcmFtTmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnB1dFR5cGUodGhpcy52dWVQcm9wc1twYXJhbU5hbWVdLnR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldEluaGVyaXRlZFZhbHVlcyhrZXksIGNvbnZlcnRlciA9IG51bGwsIGNvbXAgPSB0aGlzLnZ1ZUNvbXAsIG9iaiA9IHt9KSB7XG5cbiAgICAgICAgICAgIGlmKGNvbXAuZXh0ZW5kcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5oZXJpdGVkVmFsdWVzKGtleSwgY29udmVydGVyLCBjb21wLmV4dGVuZHMsIG9iaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGNvbXBba2V5XSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXBba2V5XSkuZm9yRWFjaChuYW1lID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gY29tcFtrZXldW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBjb252ZXJ0ZXIgPyBjb252ZXJ0ZXIocHJvcCkgOiBwcm9wO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtuYW1lXSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuXG4gICAgICAgIH1cbiAgICB9LCBcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBoYXNoKCnCoHtcbiAgICAgICAgICAgIGNvbnN0IHNldHMgPSBbYGNvbXA9JHt0aGlzLmNvbXBvbmVudE5hbWV9YF07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0cy5wdXNoKGAke25hbWV9PSR7dGhpcy5hdHRyaWJ1dGVzW25hbWVdfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge3Z1ZVByb3BWYWx1ZXM6IHRoaXMudnVlUHJvcFZhbHVlcywgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnROYW1lLCBhdHRyaWJ1dGVzOiB0aGlzLmF0dHJpYnV0ZVZhbHVlcyxjbGFzc2VzVmFsdWVzOiB0aGlzLmNsYXNzZXNWYWx1ZXN9XG4gICAgICAgIH0sXG4gICAgICAgIHRlc3RDb21wTmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBgdWstJHt0aGlzLmNvbXBvbmVudE5hbWV9YDtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWRDbGFzc2VzKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jbGFzc2VzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jbGFzc2VzVmFsdWVzW25hbWVdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLmNsYXNzZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgaWYoZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKHRoaXMuY2xhc3Nlc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXI7ICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzOyAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5oZXJpdGVkVmFsdWVzKCdjbGFzc2VzJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hpbGRDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5oZXJpdGVkVmFsdWVzKCdjaGlsZENsYXNzZXMnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wc0ZpbHRlcmVkKCkge1xuICAgICAgICB9LFxuXG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudC5vcHRpb25zLnByb3BzKS5jb25jYXQoW3RoaXMuY29tcG9uZW50QXR0cmlidXRlXSkucmVkdWNlKCh2YWwsIG5hbWUpID0+IHt2YWxbbmFtZV0gPSB0aGlzLmF0dHJpYnV0ZXNbbmFtZV07IHJldHVybiB2YWw7fSx7fSk7XG4gICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50QXR0cmlidXRlKCnCoHtcbiAgICAgICAgICAgIHJldHVybiBgdWstJHt0aGlzLmNvbXBvbmVudE5hbWV9YDtcbiAgICAgICAgfSxcblxuICAgICAgICB2dWVQcm9wcygpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5oZXJpdGVkVmFsdWVzKCdwcm9wcycsKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHJ1ZSB8fMKgIXByb3AucHJpdmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wLm9wdGlvbnMgPSBwcm9wLm9wdGlvbnMucmVkdWNlKCh2YWwsIG5hbWUpID0+IHt2YWxbbmFtZV0gPSBuYW1lOyByZXR1cm4gdmFsO30sIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB2dWVDb21wKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG9wdGlvbnMuY29tcG9uZW50c1t0aGlzLnRlc3RDb21wTmFtZV07XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIFVJa2l0LmNvbXBvbmVudHNbdGhpcy5jb21wb25lbnROYW1lXTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0cy92dWUvYXBwLnZ1ZSIsIlxuaW1wb3J0IGdyaWQgZnJvbSAnLi9ncmlkLnZ1ZSc7XG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb24udnVlJztcbmltcG9ydCBtYXJnaW4gZnJvbSAnLi9tYXJnaW4udnVlJztcbmltcG9ydCBzbGlkZXNob3cgZnJvbSAnLi9zbGlkZXNob3cudnVlJztcbmltcG9ydCBzdmcgZnJvbSAnLi9zdmcudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBncmlkLFxuICAgIGljb24sXG4gICAgbWFyZ2luLFxuICAgIHN2ZyxcbiAgICBzbGlkZXNob3dcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0cy92dWUvdGVzdHMvaW5kZXguanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFidWJsZS1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAmYnVzdENhY2hlIS4vZ3JpZC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTlkNmI0MTRlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL2dyaWQudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVzdHMvdnVlL3Rlc3RzL2dyaWQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgIHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7ICBjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05ZDZiNDE0ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTlkNmI0MTRlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuJyArICcgIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90ZXN0cy92dWUvdGVzdHMvZ3JpZC52dWVcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBtYXJnaW4gZnJvbSAnLi9tYXJnaW4udnVlJztcbmltcG9ydCB3aWR0aCBmcm9tICcuL3dpZHRoLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6J2dyaWQnLFxuICAgIFxuICAgIGV4dGVuZHM6IG1hcmdpbixcblxuICAgIGNsYXNzZXM6IHtcbiAgICAgICAgIGd1dHRlcjpbXG4gICAgICAgICAgICBgdWstZ3JpZC1jb2xsYXBzZWAsXG4gICAgICAgICAgICBgdWstZ3JpZC1zbWFsbGAsXG4gICAgICAgICAgICBgdWstZ3JpZC1tZWRpdW1gLFxuICAgICAgICAgICAgYHVrLWdyaWQtbGFyZ2VgXG4gICAgICAgIF0sXG4gICAgICAgIHdpZHRoOiB3aWR0aC5jbGFzc2VzLndpZHRoLFxuICAgICAgICBtYXJnaW46IGZhbHNlLFxuICAgICAgICBcbiAgICAgICAgZGl2aWRlcjogJ3VrLWdyaWQtZGl2aWRlcidcbiAgICB9XG5cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdHMvdnVlL3Rlc3RzL2dyaWQudnVlIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBiYXNlIGZyb20gJy4uL2Jhc2UvY29tcG9uZW50JztcblxuY29uc3QgY2xhc3Nlc01hcmdpbiA9IFtcbiAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbicsXG4gICAgICAgICAgICd1ay1tYXJnaW4tdG9wJyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbi1sZWZ0JyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbi1ib3R0b20nLFxuICAgICAgICAgICAndWstbWFyZ2luLXJpZ2h0JyxcblxuICAgICAgICAgICAgJ3VrLW1hcmdpbi1zbWFsbCcsXG4gICAgICAgICAgICd1ay1tYXJnaW4tc21hbGwtdG9wJyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbi1zbWFsbC1sZWZ0JyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbi1zbWFsbC1ib3R0b20nLFxuICAgICAgICAgICAndWstbWFyZ2luLXNtYWxsLXJpZ2h0JyxcbiAgICAgICBcbiAgICAgICAgICAgICd1ay1tYXJnaW4tbWVkaXVtJyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbi1tZWRpdW0tdG9wJyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbi1tZWRpdW0tbGVmdCcsXG4gICAgICAgICAgICd1ay1tYXJnaW4tbWVkaXVtLWJvdHRvbScsXG4gICAgICAgICAgICd1ay1tYXJnaW4tbWVkaXVtLXJpZ2h0JyxcbiAgICAgICBcbiAgICAgICAgICAgICd1ay1tYXJnaW4tbGFyZ2UnLFxuICAgICAgICAgICAndWstbWFyZ2luLWxhcmdlLXRvcCcsXG4gICAgICAgICAgICd1ay1tYXJnaW4tbGFyZ2UtbGVmdCcsXG4gICAgICAgICAgICd1ay1tYXJnaW4tbGFyZ2UtYm90dG9tJyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbi1sYXJnZS1yaWdodCcsXG4gICAgICAgXG4gICAgICAgICAgICAndWstbWFyZ2luLXhsYXJnZScsXG4gICAgICAgICAgICd1ay1tYXJnaW4teGxhcmdlLXRvcCcsXG4gICAgICAgICAgICd1ay1tYXJnaW4teGxhcmdlLWxlZnQnLFxuICAgICAgICAgICAndWstbWFyZ2luLXhsYXJnZS1ib3R0b20nLFxuICAgICAgICAgICAndWstbWFyZ2luLXhsYXJnZS1yaWdodCcsXG4gICAgICAgXG4gICAgICAgICAgICAndWstbWFyZ2luLXJlbW92ZScsXG4gICAgICAgICAgICd1ay1tYXJnaW4tcmVtb3ZlLXRvcCcsXG4gICAgICAgICAgICd1ay1tYXJnaW4tcmVtb3ZlLWxlZnQnLFxuICAgICAgICAgICAndWstbWFyZ2luLXJlbW92ZS1ib3R0b20nLFxuICAgICAgICAgICAndWstbWFyZ2luLXJlbW92ZS1yaWdodCcsXG4gICAgICAgICAgICd1ay1tYXJnaW4tcmVtb3ZlLXZlcnRpY2FsJyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbi1yZW1vdmUtYWRqYWNlbnQnLFxuICAgICAgIFxuICAgICAgICAgICAgJ3VrLW1hcmdpbi1hdXRvJyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbi1hdXRvLXRvcCcsXG4gICAgICAgICAgICd1ay1tYXJnaW4tYXV0by1sZWZ0JyxcbiAgICAgICAgICAgJ3VrLW1hcmdpbi1hdXRvLWJvdHRvbScsXG4gICAgICAgICAgICd1ay1tYXJnaW4tYXV0by1yaWdodCcsXG4gICAgICAgICAgICd1ay1tYXJnaW4tYXV0by12ZXJ0aWNhbCcsXG4gICAgICAgXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTonbWFyZ2luJyxcbiAgICBcbiAgICBleHRlbmRzOiBiYXNlLFxuXG4gICAgY2xhc3Nlczoge1xuICAgICAgIG1hcmdpbjogY2xhc3Nlc01hcmdpblxuICAgICAgICBcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICBvcHRpb25zOmNsYXNzZXNNYXJnaW4uZmlsdGVyKG5hbWUgPT4gbmFtZS5pbmRleE9mKCd0b3AnKSA+PSAwICYmIG5hbWUuaW5kZXhPZigncmVtb3ZlJykgPCAwKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0cy92dWUvdGVzdHMvbWFyZ2luLnZ1ZSIsIlxudmFyIGRpY3Rpb25hcnkgPSB7XG4gIHdvcmRzOiBbXG4gICAgJ2FkJyxcbiAgICAnYWRpcGlzaWNpbmcnLFxuICAgICdhbGlxdWEnLFxuICAgICdhbGlxdWlwJyxcbiAgICAnYW1ldCcsXG4gICAgJ2FuaW0nLFxuICAgICdhdXRlJyxcbiAgICAnY2lsbHVtJyxcbiAgICAnY29tbW9kbycsXG4gICAgJ2NvbnNlY3RldHVyJyxcbiAgICAnY29uc2VxdWF0JyxcbiAgICAnY3VscGEnLFxuICAgICdjdXBpZGF0YXQnLFxuICAgICdkZXNlcnVudCcsXG4gICAgJ2RvJyxcbiAgICAnZG9sb3InLFxuICAgICdkb2xvcmUnLFxuICAgICdkdWlzJyxcbiAgICAnZWEnLFxuICAgICdlaXVzbW9kJyxcbiAgICAnZWxpdCcsXG4gICAgJ2VuaW0nLFxuICAgICdlc3NlJyxcbiAgICAnZXN0JyxcbiAgICAnZXQnLFxuICAgICdldScsXG4gICAgJ2V4JyxcbiAgICAnZXhjZXB0ZXVyJyxcbiAgICAnZXhlcmNpdGF0aW9uJyxcbiAgICAnZnVnaWF0JyxcbiAgICAnaWQnLFxuICAgICdpbicsXG4gICAgJ2luY2lkaWR1bnQnLFxuICAgICdpcHN1bScsXG4gICAgJ2lydXJlJyxcbiAgICAnbGFib3JlJyxcbiAgICAnbGFib3JpcycsXG4gICAgJ2xhYm9ydW0nLFxuICAgICdMb3JlbScsXG4gICAgJ21hZ25hJyxcbiAgICAnbWluaW0nLFxuICAgICdtb2xsaXQnLFxuICAgICduaXNpJyxcbiAgICAnbm9uJyxcbiAgICAnbm9zdHJ1ZCcsXG4gICAgJ251bGxhJyxcbiAgICAnb2NjYWVjYXQnLFxuICAgICdvZmZpY2lhJyxcbiAgICAncGFyaWF0dXInLFxuICAgICdwcm9pZGVudCcsXG4gICAgJ3F1aScsXG4gICAgJ3F1aXMnLFxuICAgICdyZXByZWhlbmRlcml0JyxcbiAgICAnc2ludCcsXG4gICAgJ3NpdCcsXG4gICAgJ3N1bnQnLFxuICAgICd0ZW1wb3InLFxuICAgICd1bGxhbWNvJyxcbiAgICAndXQnLFxuICAgICd2ZWxpdCcsXG4gICAgJ3ZlbmlhbScsXG4gICAgJ3ZvbHVwdGF0ZScgIFxuICBdXG59O1xubW9kdWxlLmV4cG9ydHMgPSBkaWN0aW9uYXJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vbGliL2RpY3Rpb25hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0cy5lbmRpYW5uZXNzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ0xFJyB9O1xuZXhwb3J0cy5ob3N0bmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWVcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gJyc7XG59O1xuZXhwb3J0cy5sb2FkYXZnID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfTtcbmV4cG9ydHMudXB0aW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gMCB9O1xuZXhwb3J0cy5mcmVlbWVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xufTtcbmV4cG9ydHMudG90YWxtZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG59O1xuZXhwb3J0cy5jcHVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfTtcbmV4cG9ydHMudHlwZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdCcm93c2VyJyB9O1xuZXhwb3J0cy5yZWxlYXNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiAnJztcbn07XG5leHBvcnRzLm5ldHdvcmtJbnRlcmZhY2VzXG49IGV4cG9ydHMuZ2V0TmV0d29ya0ludGVyZmFjZXNcbj0gZnVuY3Rpb24gKCkgeyByZXR1cm4ge30gfTtcbmV4cG9ydHMuYXJjaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdqYXZhc2NyaXB0JyB9O1xuZXhwb3J0cy5wbGF0Zm9ybSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdicm93c2VyJyB9O1xuZXhwb3J0cy50bXBkaXIgPSBleHBvcnRzLnRtcERpciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJy90bXAnO1xufTtcbmV4cG9ydHMuRU9MID0gJ1xcbic7XG5leHBvcnRzLmhvbWVkaXIgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAnLydcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vcy1icm93c2VyaWZ5L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBfdm0uX2Ioe30sIFwiZGl2XCIsIF92bS5hdHRyaWJ1dGVzLCBmYWxzZSksXG4gICAgX3ZtLl9sKF92bS5jb3VudCwgZnVuY3Rpb24obikge1xuICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVrLWNhcmQgdWstY2FyZC1kZWZhdWx0IHVrLWNhcmQtYm9keVwiLFxuICAgICAgICAgIGNsYXNzOiBfdm0uY2xhc3NlcyxcbiAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uaXBzdW0oKSkgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICB9KVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xMzE3YjMwMVwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTEzMTdiMzAxXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Rlc3RzL3Z1ZS90ZXN0cy9tYXJnaW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFidWJsZS1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAmYnVzdENhY2hlIS4vd2lkdGgudnVlXCJcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVzdHMvdnVlL3Rlc3RzL3dpZHRoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7ICByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkgeyAgY29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmIzY2U4NDNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYjNjZTg0M1wiLCBDb21wb25lbnQub3B0aW9ucylcbicgKyAnICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVzdHMvdnVlL3Rlc3RzL3dpZHRoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNsYXNzZXM6e1xuICAgICAgd2lkdGg6IFtcbiAgICAgICAgICAgICd1ay1jaGlsZC13aWR0aC1hdXRvJyxcbiAgICAgICAgICAgICd1ay1jaGlsZC13aWR0aC1leHBhbmQnLFxuICAgICAgICAgICAgJ3VrLWNoaWxkLXdpZHRoLTEtMicsXG4gICAgICAgICAgICAndWstY2hpbGQtd2lkdGgtMS0zJyxcbiAgICAgICAgICAgICd1ay1jaGlsZC13aWR0aC0xLTQnLFxuICAgICAgICAgICAgJ3VrLWNoaWxkLXdpZHRoLTEtNScsXG4gICAgICAgICAgICAndWstY2hpbGQtd2lkdGgtMS02J1xuICAgICAgICBdXG4gIH0sXG4gIHdpZHRoY2hpbGRDbGFzc2VzOsKge1xuICAgICAgICB3aWR0aDpbXG4gICAgICAgICAgICAndWstd2lkdGgtYXV0bycsXG4gICAgICAgICAgICAndWstd2lkdGgtZXhwYW5kJyxcblxuICAgICAgICAgICAgJ3VrLXdpZHRoLXNtYWxsJyxcbiAgICAgICAgICAgICd1ay13aWR0aC1tZWRpdW0nLFxuICAgICAgICAgICAgJ3VrLXdpZHRoLWxhcmdlJyxcbiAgICAgICAgICAgICd1ay13aWR0aC14bGFyZ2UnLFxuICAgICAgICAgICAgJ3VrLXdpZHRoLXh4bGFyZ2UnLFxuXG4gICAgICAgICAgICAndWstY2hpbGQtd2lkdGgtMS0xJyxcbiAgICAgICAgICAgICd1ay1jaGlsZC13aWR0aC0xLTInLFxuICAgICAgICAgICAgJ3VrLWNoaWxkLXdpZHRoLTEtMycsXG4gICAgICAgICAgICAndWstY2hpbGQtd2lkdGgtMi0zJyxcbiAgICAgICAgICAgICd1ay1jaGlsZC13aWR0aC0xLTQnLFxuICAgICAgICAgICAgJ3VrLWNoaWxkLXdpZHRoLTItNCcsXG4gICAgICAgICAgICAndWstY2hpbGQtd2lkdGgtMy00JyxcbiAgICAgICAgICAgICd1ay1jaGlsZC13aWR0aC0xLTUnLFxuICAgICAgICAgICAgJ3VrLWNoaWxkLXdpZHRoLTItNScsXG4gICAgICAgICAgICAndWstY2hpbGQtd2lkdGgtMy01JyxcbiAgICAgICAgICAgICd1ay1jaGlsZC13aWR0aC00LTUnLFxuICAgICAgICAgICAgJ3VrLWNoaWxkLXdpZHRoLTEtNicsXG4gICAgICAgICAgICAndWstY2hpbGQtd2lkdGgtMi02JyxcbiAgICAgICAgICAgICd1ay1jaGlsZC13aWR0aC0zLTYnLFxuICAgICAgICAgICAgJ3VrLWNoaWxkLXdpZHRoLTQtNicsXG4gICAgICAgICAgICAndWstY2hpbGQtd2lkdGgtNS02J1xuICAgICAgICBdXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdHMvdnVlL3Rlc3RzL3dpZHRoLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBfdm0uX2IoeyBjbGFzczogX3ZtLmNsYXNzZXMgfSwgXCJkaXZcIiwgX3ZtLmF0dHJpYnV0ZXMsIGZhbHNlKSxcbiAgICBfdm0uX2woX3ZtLmNvdW50LCBmdW5jdGlvbihuKSB7XG4gICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidWstY2FyZCB1ay1jYXJkLWRlZmF1bHQgdWstY2FyZC1ib2R5XCIsXG4gICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmlwc3VtKCkpIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgfSlcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtOWQ2YjQxNGVcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05ZDZiNDE0ZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi90ZXN0cy92dWUvdGVzdHMvZ3JpZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJ1YmxlLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCZidXN0Q2FjaGUhLi9pY29uLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSBudWxsXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlc3RzL3Z1ZS90ZXN0cy9pY29uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7ICByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkgeyAgY29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzI1OTNmMGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03MjU5M2YwY1wiLCBDb21wb25lbnQub3B0aW9ucylcbicgKyAnICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVzdHMvdnVlL3Rlc3RzL2ljb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL1xuXG5pbXBvcnQgaXBzdW0gZnJvbSAnbG9yZW0taXBzdW0nO1xuaW1wb3J0IHN2ZyBmcm9tICcuL3N2Zy52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOidpY29uJyxcbiAgICBcbiAgICBleHRlbmRzOiBzdmcsXG5cbiAgICBwcm9wczoge1xuICAgICAgICBcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2hvbWUnLFxuICAgICAgICAgICAgb3B0aW9uczogW10uY29uY2F0KFVJa2l0Lmljb24ubGlzdCgpKVxuICAgICAgICB9LFxuICAgICAgICBpZDoge1xuICAgICAgICAgICAgcHJpdmF0ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0cy92dWUvdGVzdHMvaWNvbi52dWUiLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBpcHN1bSBmcm9tICdsb3JlbS1pcHN1bSc7XG5pbXBvcnQgYmFzZSBmcm9tICcuLi9iYXNlL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6J3N2ZycsXG4gICAgXG4gICAgZXh0ZW5kczogYmFzZSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHNyYzp7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgJ0ltYWdlJzogJy4uLy4uL3NyYy9pbWFnZXMvY29tcG9uZW50cy9uYXZiYXItdG9nZ2xlLWljb24uc3ZnJyxcbiAgICAgICAgICAgICAgICAnU3ltYm9sK0lEJzogJy4uL2ltYWdlcy9pY29ucy5zdmcjdGFibGUnLFxuICAgICAgICAgICAgICAgICdTeW1ib2wrSUQrbm90Zm91bmQnOiAnLi4vaW1hZ2VzL2ljb25zLnN2ZyNub3Rmb3VuZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmF0aW86IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICBtaW46IDAuMSxcbiAgICAgICAgICAgIG1heDogMTAsXG4gICAgICAgICAgICBzdGVwOiAwLjFcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3RzL3Z1ZS90ZXN0cy9zdmcudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidWstY29udGFpbmVyXCIgfSxcbiAgICBfdm0uX2wocGFyc2VJbnQoX3ZtLmNvdW50KSwgZnVuY3Rpb24obikge1xuICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKG4pKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCBfdm0uX2IoeyBjbGFzczogX3ZtLmNsYXNzZXMgfSwgXCJkaXZcIiwgX3ZtLmF0dHJpYnV0ZXMsIGZhbHNlKSlcbiAgICAgIF0pXG4gICAgfSlcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzY5ZTZmMjFcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NjllNmYyMVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi90ZXN0cy92dWUvdGVzdHMvc3ZnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYnVibGUtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wJmJ1c3RDYWNoZSEuL3NsaWRlc2hvdy52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRjNDYyNDJiXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3NsaWRlc2hvdy52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZXN0cy92dWUvdGVzdHMvc2xpZGVzaG93LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7ICByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkgeyAgY29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGM0NjI0MmJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00YzQ2MjQyYlwiLCBDb21wb25lbnQub3B0aW9ucylcbicgKyAnICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVzdHMvdnVlL3Rlc3RzL3NsaWRlc2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0IGJhc2UgZnJvbSAnLi4vYmFzZS9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ3NsaWRlc2hvdycsXG5cbiAgICBleHRlbmRzOiBiYXNlLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogJ3NsaWRlJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IFsgJ3NsaWRlJywgJ2ZhZGUnLCAnc2NhbGUnLCAncHVsbCcsICdwdXNoJ8KgXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOntcbiAgICAgICAgaW1hZ2UoaSkge1xuICAgICAgICAgICAgcmV0dXJuIEpQR1NbaSAlIEpQR1MubGVuZ3RoXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdHMvdnVlL3Rlc3RzL3NsaWRlc2hvdy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwianMtc2xpZGVzaG93LWFuaW1hdGlvblwiLFxuICAgICAgYXR0cnM6IHsgXCJ1ay1zbGlkZXNob3dcIjogXCJyYXRpbzogMzoyOyBhdXRvcGxheTogMVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInVrLXBvc2l0aW9uLXJlbGF0aXZlIHVrLXZpc2libGUtdG9nZ2xlIHVrLWxpZ2h0XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ1ay1zbGlkZXNob3ctaXRlbXNcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb3VudCwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi4uL2ltYWdlcy9cIiArIF92bS5pbWFnZShuKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcInVrLWNvdmVyXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcInVrLXBvc2l0aW9uLWNlbnRlci1sZWZ0IHVrLXBvc2l0aW9uLXNtYWxsIHVrLWhpZGRlbi1ob3ZlclwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJ1ay1zbGlkZW5hdi1wcmV2aW91c1wiOiBcIlwiLFxuICAgICAgICAgICAgICBcInVrLXNsaWRlc2hvdy1pdGVtXCI6IFwicHJldmlvdXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcInVrLXBvc2l0aW9uLWNlbnRlci1yaWdodCB1ay1wb3NpdGlvbi1zbWFsbCB1ay1oaWRkZW4taG92ZXJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IFwidWstc2xpZGVuYXYtbmV4dFwiOiBcIlwiLCBcInVrLXNsaWRlc2hvdy1pdGVtXCI6IFwibmV4dFwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidWstZG90bmF2IHVrLWZsZXgtY2VudGVyIHVrLW1hcmdpblwiIH0sXG4gICAgICAgIF92bS5fbChfdm0uY291bnQsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGF0dHJzOiB7IFwidWstc2xpZGVzaG93LWl0ZW1cIjogbiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW192bS5fdihcIkl0ZW0gXCIgKyBfdm0uX3MobikpXSlcbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJ1ay1wb3NpdGlvbi1jZW50ZXIgdWstcG9zaXRpb24tc21hbGwgdWstdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImgyXCIsIHsgYXR0cnM6IHsgXCJ1ay1zbGlkZXNob3ctcGFyYWxsYXhcIjogXCJ4OiAxMDAsLTEwMFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIkhlYWRpbmdcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IFwidWstc2xpZGVzaG93LXBhcmFsbGF4XCI6IFwieDogMjAwLC0yMDBcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC5cIilcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00YzQ2MjQyYlwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRjNDYyNDJiXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wJmJ1c3RDYWNoZSEuL3Rlc3RzL3Z1ZS90ZXN0cy9zbGlkZXNob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFidWJsZS1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAmYnVzdENhY2hlIS4vY2FzdGluZ0lucHV0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOGNkZTQ1MjhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vY2FzdGluZ0lucHV0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlc3RzL3Z1ZS9jYXN0aW5nSW5wdXQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgIHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7ICBjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04Y2RlNDUyOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LThjZGU0NTI4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuJyArICcgIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90ZXN0cy92dWUvY2FzdGluZ0lucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICByZXF1aXJlZDp0cnVlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOntcbiAgICAgICAgICAgIHJlcXVpcmVkOnRydWVcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICB9XG4gICAgfSxcbiAgICBoaWRkZW46IHRydWUsXG4gICAgbWV0aG9kczp7XG4gICAgICAgIGNoYW5nZShlKSB7XG4gICAgICAgICAgICBzd2l0Y2godGhpcy5jb25maWcudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdHMvdnVlL2Nhc3RpbmdJbnB1dC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS50eXBlID09PSBcImNoZWNrYm94XCJcbiAgICA/IF9jKFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIF92bS5fYihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBfdm0udHlwZSB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgY2hlY2tlZDogX3ZtLnZhbHVlIH0sXG4gICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5jaGFuZ2UgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgIF92bS5jb25maWcsXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKVxuICAgICAgKVxuICAgIDogX2MoXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9LCBvbjogeyBpbnB1dDogX3ZtLmNoYW5nZSB9IH0sXG4gICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgIF92bS5jb25maWcsXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKVxuICAgICAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtOGNkZTQ1MjhcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04Y2RlNDUyOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCZidXN0Q2FjaGUhLi90ZXN0cy92dWUvY2FzdGluZ0lucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVrLWNvbnRhaW5lclwiIH0sIFtcbiAgICBfYyhcInNlY3Rpb25cIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29tcG9uZW50TmFtZSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb21wb25lbnROYW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF92bS5jb21wb25lbnROYW1lID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmxvYWRDb21wKCksIF92bS5tYWtlSGFzaCgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0uJG9wdGlvbnMuY29tcG9uZW50cywgZnVuY3Rpb24ob2JqLCBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuICFvYmouaGlkZGVuXG4gICAgICAgICAgICA/IF9jKFwib3B0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogb2JqLm5hbWUsIGlubmVySFRNTDogX3ZtLl9zKG5hbWUpIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDJcIiwgW192bS5fdihcImNsYXNzZXNcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICBbXG4gICAgICAgIF92bS5fbChfdm0uY2xhc3NlcywgZnVuY3Rpb24ocGFyYW0sIG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gcGFyYW1cbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBuYW1lIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhuYW1lICsgXCI6XCIpIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocGFyYW0pXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2xhc3Nlc1ZhbHVlc1tuYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNsYXNzZXNWYWx1ZXNbbmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xhc3Nlc1ZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChwYXJhbSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogdmFsLCBpbm5lckhUTUw6IF92bS5fcyh2YWwpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2xhc3Nlc1ZhbHVlc1tuYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjbGFzc2VzVmFsdWVzW25hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IG5hbWUsIHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5jbGFzc2VzVmFsdWVzW25hbWVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0uY2xhc3Nlc1ZhbHVlc1tuYW1lXSwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5jbGFzc2VzVmFsdWVzW25hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5jbGFzc2VzVmFsdWVzW25hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmNsYXNzZXNWYWx1ZXNbbmFtZV0gPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5jbGFzc2VzVmFsdWVzW25hbWVdID0gJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jbGFzc2VzVmFsdWVzLCBuYW1lLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJhdHRyaWJ1dGVzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uYXR0cmlidXRlcywgZnVuY3Rpb24ocGFyYW0sIG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLmNvbXBvbmVudC5vcHRpb25zLnByb3BzW25hbWVdICYmXG4gICAgICAgICAgICBuYW1lICE9PSBfdm0uY29tcG9uZW50QXR0cmlidXRlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogbmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhuYW1lICsgXCI6XCIpIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS52dWVQcm9wc1tuYW1lXSAmJiBfdm0udnVlUHJvcHNbbmFtZV0ub3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hdHRyaWJ1dGVzW25hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhdHRyaWJ1dGVzW25hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS52dWVQcm9wc1tuYW1lXS5vcHRpb25zLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBvcHRpb24sIGlubmVySFRNTDogX3ZtLl9zKGtleSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJjYXN0aW5nSW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLmdldFR5cGUobmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogX3ZtLmlucHV0T3B0aW9ucyhuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYXR0cmlidXRlc1tuYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5hdHRyaWJ1dGVzLCBuYW1lLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYXR0cmlidXRlc1tuYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiY29udGVudFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLnZ1ZVByb3BzLCBmdW5jdGlvbihwYXJhbSwgbmFtZSkge1xuICAgICAgICAgIHJldHVybiAhX3ZtLmNvbXBvbmVudC5vcHRpb25zLnByb3BzW25hbWVdICYmXG4gICAgICAgICAgICAhKF92bS52dWVQcm9wc1tuYW1lXSAmJiBfdm0udnVlUHJvcHNbbmFtZV0ucHJpdmF0ZSlcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBuYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKG5hbWUgKyBcIjpcIikgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJjYXN0aW5nSW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5nZXRUeXBlKG5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogX3ZtLmlucHV0T3B0aW9ucyhuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udnVlUHJvcFZhbHVlc1tuYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udnVlUHJvcFZhbHVlcywgbmFtZSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2dWVQcm9wVmFsdWVzW25hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInNlY3Rpb25cIixcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgX3ZtLnRlc3RDb21wTmFtZSxcbiAgICAgICAgICBfdm0uX2IoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBfdm0uYXR0cmlidXRlVmFsdWVzLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6IF92bS5jb21wdXRlZENsYXNzZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICBfdm0udnVlUHJvcFZhbHVlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTRmZTYxNmU4XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGZlNjE2ZThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAmYnVzdENhY2hlIS4vdGVzdHMvdnVlL2FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=