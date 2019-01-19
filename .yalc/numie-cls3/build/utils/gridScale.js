"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _polished = require("polished");

function gridScale(scale, theme) {
  if (theme) {
    return (0, _polished.rem)(theme.dimensions.baseGrid * scale);
  }

  return function (props) {
    return (0, _polished.rem)(props.theme.dimensions.baseGrid * scale);
  };
}

var _default = gridScale;
exports.default = _default;