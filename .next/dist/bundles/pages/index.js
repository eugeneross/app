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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_sass__ = __webpack_require__("./components/Button/index.sass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_sass__);


var _jsxFileName = '/Users/eugeneross/Sites/tortuga/components/Button/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Libraries



// Styles


var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button(props) {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
    }

    _createClass(Button, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return this.props.href ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_2__index_sass___default.a.btn + ' ' + this.props.className, target: '_blank', href: this.props.href, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                },
                this.props.text
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                { href: this.props.link, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: __WEBPACK_IMPORTED_MODULE_2__index_sass___default.a.btn + ' ' + this.props.className, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    },
                    this.props.text
                )
            );
        }
    }]);

    return Button;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./components/Button/index.sass":
/***/ (function(module, exports) {

module.exports = {
	"btn": "btn",
	"fixed": "fixed",
	"full": "full",
	"ghost-primary": "ghost-primary",
	"ghost-white": "ghost-white",
	"book": "book",
	"btn-subscribe": "btn-subscribe",
	"nav": "nav",
	"bg-primary": "bg-primary",
	"bg-secondary": "bg-secondary",
	"color-primary": "color-primary",
	"color-secondary": "color-secondary"
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Button__ = __webpack_require__("./components/Button/index.js");


var _jsxFileName = '/Users/eugeneross/Sites/tortuga/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Libraries



// Components


var Index = function (_Component) {
	_inherits(Index, _Component);

	function Index(props) {
		_classCallCheck(this, Index);

		return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log("Index Component mounted.");
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 19
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'main',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 22
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 23
							}
						},
						'Sup index'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
						{ href: '/about', __source: {
								fileName: _jsxFileName,
								lineNumber: 24
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'a',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 24
								}
							},
							'About'
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Button__["a" /* default */], {
						className: 'color-primary',
						text: 'I\'m a button',
						href: '/about',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 26
						}
					})
				)
			);
		}
	}]);

	return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map