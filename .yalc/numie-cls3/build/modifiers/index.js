"use strict";

var _fontColors = _interopRequireDefault(require("./fontColors"));

var _fontWeights = _interopRequireDefault(require("./fontWeights"));

var _statusColors = _interopRequireDefault(require("./statusColors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var positionRelative = function positionRelative() {
  return "\n  position: relative;\n";
};

module.exports = _objectSpread({
  positionRelative: positionRelative
}, _fontColors.default, _fontWeights.default, _statusColors.default);