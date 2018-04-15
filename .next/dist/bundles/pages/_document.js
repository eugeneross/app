module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_document__ = __webpack_require__("next/document");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ga__ = __webpack_require__("react-ga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_ga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_index_sass__ = __webpack_require__("./styles/index.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_index_sass__);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/eugeneross/Sites/tortuga/pages/_document.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var page = {
    index: {
        description: 'Description',
        url: 'https://ross.so',
        keywords: 'Keywords',
        facebookShare: '/static/images/meta/share.png',
        twitterShare: '/static/images/meta/share.png',
        favicon: {
            png: '/static/images/meta/favicons/favicon.png',
            ico: '/static/images/meta/favicons/favicon.ico',
            iphone: '/static/images/meta/favicons/touch-icon-iphone.png',
            svg: '/static/images/meta/favicons/mask.svg'
        }
    }
};

var MyDocument = function (_Document) {
    _inherits(MyDocument, _Document);

    function MyDocument() {
        _classCallCheck(this, MyDocument);

        return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
    }

    _createClass(MyDocument, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.documentElement.className = 'js';
            //Google Analytics
            __WEBPACK_IMPORTED_MODULE_3_react_ga___default.a.initialize('UA-XXXX-X');
            __WEBPACK_IMPORTED_MODULE_3_react_ga___default.a.pageview(document.location.pathname);
        }
    }, {
        key: 'render',
        value: function render() {
            //console.log('test', stylesheet);
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'html',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_next_document__["Head"],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'title',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            }
                        },
                        'Title'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'format-detection', content: 'telephone=no', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'width=device-width', name: 'viewport', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'yes', name: 'apple-mobile-web-app-capable', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'yes', name: 'apple-touch-fullscreen', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'icon', href: page.index.favicon.ico, type: 'image/x-icon', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'shortcut icon', href: page.index.favicon.ico, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: page.index.favicon.png, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: page.index.favicon.iphone, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'mask-icon', href: page.index.favicon.svg, color: '#141516', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'Description', name: 'application-name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: page.index.description, name: 'description', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: page.index.title, name: 'author', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: page.index.keywords, name: 'keywords', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: '2017', name: 'copyright', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'website', property: 'og:type', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'Description', property: 'og:title', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: page.index.description, property: 'og:description', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: page.index.facebookShare, property: 'og:image', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: page.index.url, property: 'og:url', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: '1200', property: 'og:image:width', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: '630', property: 'og:image:height', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'Description', property: 'og:site_name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'summary_large_image', name: 'twitter:card', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: 'Description', name: 'twitter:title', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: page.index.description, name: 'twitter:description', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: page.index.twitterShare, name: 'twitter:image', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: '@eugeneross', name: 'twitter:site', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { content: '@eugeneross', name: 'twitter:creator', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,800', rel: 'stylesheet', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_4__styles_index_sass___default.a }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 89
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'body',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_document__["Main"], {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_document__["NextScript"], {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 96
                        }
                    })
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
                var initialProps;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __WEBPACK_IMPORTED_MODULE_2_next_document___default.a.getInitialProps(ctx);

                            case 2:
                                initialProps = _context.sent;
                                return _context.abrupt('return', _extends({}, initialProps));

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_2_next_document___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "./styles/index.sass":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "html {\n  height: 100%;\n  background: white;\n  font-size: 1rem;\n  min-width: 18.75rem;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-overflow-scrolling: touch; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Open sans' !important;\n  position: relative;\n  color: blue;\n  line-height: 1.5;\n  width: 100vw;\n  overflow-x: hidden;\n  letter-spacing: -.02rem; }\n";
})();

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map