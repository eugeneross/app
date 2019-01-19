"use strict";

var _fontWeights = _interopRequireDefault(require("./fontWeights"));

var _gridScale = _interopRequireDefault(require("./gridScale"));

var _statusColors = _interopRequireDefault(require("./statusColors"));

var _uiColors = _interopRequireDefault(require("./uiColors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is the primary export for general purpose utils
module.exports = {
  fontWeights: _fontWeights.default,
  gridScale: _gridScale.default,
  statusColors: _statusColors.default,
  uiColors: _uiColors.default
};