"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function uiColors(color, theme) {
  if (theme) {
    return theme.colors.ui[color];
  }

  return function (props) {
    return props.theme.colors.ui[color];
  };
}

var _default = uiColors;
exports.default = _default;