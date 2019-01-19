"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var fontWeightModifiers = {
  light: function light(_ref) {
    var theme = _ref.theme;
    return "\n    font-weight: ".concat((0, _utils.fontWeights)('light', theme), ";\n  ");
  },
  normal: function normal(_ref2) {
    var theme = _ref2.theme;
    return "\n    font-weight: ".concat((0, _utils.fontWeights)('normal', theme), ";\n  ");
  },
  semiBold: function semiBold(_ref3) {
    var theme = _ref3.theme;
    return "\n    font-weight: ".concat((0, _utils.fontWeights)('semiBold', theme), ";\n  ");
  },
  bold: function bold(_ref4) {
    var theme = _ref4.theme;
    return "\n    font-weight: ".concat((0, _utils.fontWeights)('bold', theme), ";\n  ");
  }
};
var _default = fontWeightModifiers;
exports.default = _default;