"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var fontColorModifiers = {
  text: function text(_ref) {
    var theme = _ref.theme;
    return "\n    color: ".concat((0, _utils.uiColors)('text', theme), ";\n  ");
  },
  textLight: function textLight(_ref2) {
    var theme = _ref2.theme;
    return "\n    color: ".concat((0, _utils.uiColors)('textLight', theme), ";\n  ");
  }
};
var _default = fontColorModifiers;
exports.default = _default;