'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Work = function Work(_ref) {
  var className = _ref.className,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 32 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 32 : _ref$height,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? '6.25%' : _ref$strokeWidth,
      _ref$strokeLinejoin = _ref.strokeLinejoin,
      strokeLinejoin = _ref$strokeLinejoin === undefined ? 'round' : _ref$strokeLinejoin,
      _ref$strokeLinecap = _ref.strokeLinecap,
      strokeLinecap = _ref$strokeLinecap === undefined ? 'round' : _ref$strokeLinecap,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'currentcolor' : _ref$color;
  return _react2.default.createElement(
    'svg',
    { className: className, id: 'i-work', viewBox: '0 0 32 32', width: width, height: height, fill: 'none', stroke: color, strokeLinecap: strokeLinecap, strokeLinejoin: strokeLinejoin, strokeWidth: strokeWidth },
    _react2.default.createElement('path', { d: 'M30 8 L2 8 2 26 30 26 Z M20 8 C20 8 20 4 16 4 12 4 12 8 12 8 M8 26 L8 8 M24 26 L24 8' })
  );
};

exports.default = Work;