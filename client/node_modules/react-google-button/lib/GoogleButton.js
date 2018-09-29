'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icons = require('./icons');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleButton = function (_PureComponent) {
  _inherits(GoogleButton, _PureComponent);

  function GoogleButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoogleButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoogleButton.__proto__ || Object.getPrototypeOf(GoogleButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.getStyle = function (propStyles) {
      var baseStyle = _this.props.type === 'dark' ? _styles.darkStyle : _styles.lightStyle;
      if (_this.state.hovered) {
        return _extends({}, baseStyle, _styles.hoverStyle, propStyles);
      }
      if (_this.props.disabled) {
        return _extends({}, baseStyle, _styles.disabledStyle, propStyles);
      }
      return _extends({}, baseStyle, propStyles);
    }, _this.mouseOver = function () {
      if (!_this.props.disabled) {
        _this.setState({ hovered: true });
      }
    }, _this.mouseOut = function () {
      if (!_this.props.disabled) {
        _this.setState({ hovered: false });
      }
    }, _this.click = function (e) {
      if (!_this.props.disabled) {
        _this.props.onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoogleButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          style = _props.style,
          otherProps = _objectWithoutProperties(_props, ['label', 'style']);

      return _react2.default.createElement(
        'div',
        _extends({}, otherProps, {
          onClick: this.click,
          style: this.getStyle(style),
          onMouseOver: this.mouseOver,
          onMouseOut: this.mouseOut
        }),
        _react2.default.createElement(_icons.GoogleIcon, this.props),
        _react2.default.createElement(
          'span',
          null,
          label
        )
      );
    }
  }]);

  return GoogleButton;
}(_react.PureComponent);

GoogleButton.propTypes = {
  label: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['light', 'dark']),
  style: _propTypes2.default.object
};
GoogleButton.defaultProps = {
  label: 'Sign in with Google',
  disabled: false,
  type: 'dark',
  onClick: function onClick() {}
};
exports.default = GoogleButton;