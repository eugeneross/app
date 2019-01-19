"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function fontSizes(size, theme) {
  if (theme) {
    return theme.font.sizes[size];
  }

  return function (props) {
    return props.theme.font.sizes[size];
  };
}

var _default = fontSizes;
exports.default = _default;