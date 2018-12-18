'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lock = function Lock(_ref) {
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
    { className: className, id: 'i-lock', viewBox: '0 0 32 32', width: width, height: height, fill: 'none', stroke: color, strokeLinecap: strokeLinecap, strokeLinejoin: strokeLinejoin, strokeWidth: strokeWidth },
    _react2.default.createElement('path', { d: 'M5 15 L5 30 27 30 27 15 Z M9 15 C9 9 9 5 16 5 23 5 23 9 23 15 M16 20 L16 23' }),
    _react2.default.createElement('circle', { cx: '16', cy: '24', r: '1' })
  );
};

exports.default = Lock;