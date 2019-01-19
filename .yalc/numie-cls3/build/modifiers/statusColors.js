"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var statusColorModifiers = {
  statusColorDanger: function statusColorDanger(_ref) {
    var theme = _ref.theme;
    return "\n    color: ".concat((0, _utils.statusColors)('danger', theme), ";\n  ");
  },
  statusColorDefault: function statusColorDefault(_ref2) {
    var theme = _ref2.theme;
    return "\n    color: ".concat((0, _utils.statusColors)('default', theme), ";\n  ");
  },
  statusColorInfo: function statusColorInfo(_ref3) {
    var theme = _ref3.theme;
    return "\n    color: ".concat((0, _utils.statusColors)('info', theme), ";\n  ");
  },
  statusColorSuccess: function statusColorSuccess(_ref4) {
    var theme = _ref4.theme;
    return "\n    color: ".concat((0, _utils.statusColors)('success', theme), ";\n  ");
  },
  statusColorWarning: function statusColorWarning(_ref5) {
    var theme = _ref5.theme;
    return "\n    color: ".concat((0, _utils.statusColors)('warning', theme), ";\n  ");
  }
};
var _default = statusColorModifiers;
exports.default = _default;