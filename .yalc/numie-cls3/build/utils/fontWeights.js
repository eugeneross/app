"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function fontWeights(weight, theme) {
  if (theme) {
    return theme.font.weights[weight];
  }

  return function (props) {
    return props.theme.font.weights[weight];
  };
}

var _default = fontWeights;
exports.default = _default;