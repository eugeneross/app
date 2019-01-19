"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function statusColors(color, theme) {
  if (theme) {
    return theme.colors.status[color];
  }

  return function (props) {
    return props.theme.colors.status[color];
  };
}

var _default = statusColors;
exports.default = _default;