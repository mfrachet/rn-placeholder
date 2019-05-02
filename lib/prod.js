'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactNative = require('react-native');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var START_VALUE = 0.5;
var END_VALUE = 1;
var DURATION = 500;
var useNativeDriver = true;
/**
 * Create a repetitive fadein / fadeout animation
 */

var Fade = function Fade(_ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, ["children", "style"]);

  var animation = new reactNative.Animated.Value(START_VALUE);

  function start() {
    reactNative.Animated.sequence([reactNative.Animated.timing(animation, {
      toValue: END_VALUE,
      duration: DURATION,
      useNativeDriver: useNativeDriver
    }), reactNative.Animated.timing(animation, {
      toValue: START_VALUE,
      duration: DURATION,
      useNativeDriver: useNativeDriver
    })]).start(function (e) {
      if (e.finished) {
        start();
      }
    });
  }

  start();
  var customStyle = {
    opacity: animation
  };
  return React.createElement(reactNative.Animated.View, _extends({
    style: [style, customStyle]
  }, props), children);
};

Fade.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)])
};
Fade.defaultProps = {
  children: null
};

var START_VALUE$1 = 0;
var END_VALUE$1 = 100;
var DURATION$1 = 750;
var styles = reactNative.StyleSheet.create({
  shine: {
    width: 30,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#ffffff',
    opacity: 0.4
  }
});
/**
 * Create a repetitive Shine animation
 */

var Shine = function Shine(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var animation = new reactNative.Animated.Value(0);

  function start() {
    animation.setValue(START_VALUE$1);
    reactNative.Animated.sequence([reactNative.Animated.timing(animation, {
      toValue: END_VALUE$1,
      duration: DURATION$1
    })]).start(function (e) {
      return e.finished && start();
    });
  }

  start();
  var marginLeft = animation.interpolate({
    inputRange: [START_VALUE$1, END_VALUE$1],
    outputRange: ['0%', '100%']
  });
  return React.createElement(reactNative.View, props, children, React.createElement(reactNative.Animated.View, {
    style: [styles.shine, {
      marginLeft: marginLeft
    }]
  }));
};

Shine.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)])
};
Shine.defaultProps = {
  children: null
};

/**
 * Animation factory
 * Get an animation by its name
 */

var Animations = {
  fade: Fade,
  shine: Shine
};

var styles$1 = reactNative.StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flex: 1
  },
  centerElement: {
    flex: 1
  },
  leftSide: {
    marginRight: 12
  },
  rightSide: {
    marginLeft: 12
  }
});

var makeRoot = function makeRoot(animation) {
  if (animation) {
    var Animation = Animations[animation];

    if (!Animation) {
      throw new Error("Animation \"".concat(animation, "\" doesn't exist in the library"));
    }

    return Animation;
  }

  return reactNative.View;
};

var withView = function withView(fn, props) {
  return React.createElement(reactNative.View, props, fn());
};

var Placeholder = function Placeholder(_ref) {
  var isReady = _ref.isReady,
      animation = _ref.animation,
      customAnimation = _ref.customAnimation,
      children = _ref.children,
      WhenReadyRender = _ref.whenReadyRender,
      renderLeft = _ref.renderLeft,
      renderRight = _ref.renderRight,
      props = _objectWithoutProperties(_ref, ["isReady", "animation", "customAnimation", "children", "whenReadyRender", "renderLeft", "renderRight"]);

  var Root = customAnimation || makeRoot(animation);

  if (isReady) {
    return WhenReadyRender ? React.createElement(WhenReadyRender, null) : null;
  }

  var childrenArray = React.Children.toArray(children);
  var sizeOfChildren = childrenArray.length;
  return React.createElement(Root, _extends({
    style: styles$1.container
  }, props), renderLeft && withView(renderLeft, {
    style: styles$1.leftSide
  }), React.createElement(reactNative.View, {
    style: styles$1.centerElement
  }, childrenArray.map(function (element, index) {
    return React.cloneElement(element, {
      noMargin: index === sizeOfChildren - 1
    });
  })), renderRight && withView(renderRight, {
    style: styles$1.rightSide
  }));
};

var connect = function connect(Component) {
  return function (_ref) {
    var isReady = _ref.isReady,
        animation = _ref.animation,
        customAnimation = _ref.customAnimation,
        children = _ref.children,
        whenReadyRender = _ref.whenReadyRender,
        renderLeft = _ref.renderLeft,
        renderRight = _ref.renderRight,
        props = _objectWithoutProperties(_ref, ["isReady", "animation", "customAnimation", "children", "whenReadyRender", "renderLeft", "renderRight"]);

    return React.createElement(Placeholder, {
      isReady: isReady,
      animation: animation,
      customAnimation: customAnimation,
      whenReadyRender: whenReadyRender,
      renderLeft: renderLeft,
      renderRight: renderRight
    }, React.createElement(Component, props));
  };
};

var Line = function Line(_ref) {
  var _ref$textSize = _ref.textSize,
      textSize = _ref$textSize === void 0 ? 12 : _ref$textSize,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#efefef' : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      style = _ref.style,
      _ref$noMargin = _ref.noMargin,
      noMargin = _ref$noMargin === void 0 ? false : _ref$noMargin,
      props = _objectWithoutProperties(_ref, ["textSize", "color", "width", "style", "noMargin"]);

  var height = textSize;
  var alignSelf = 'stretch';
  var backgroundColor = color;
  var borderRadius = textSize / 4;
  var marginBottom = noMargin ? 0 : textSize;
  var computedStyle = {
    height: height,
    alignSelf: alignSelf,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    width: width,
    marginBottom: marginBottom
  };
  return React.createElement(reactNative.View, _extends({
    style: [computedStyle, style]
  }, props));
};

var Paragraph =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Paragraph, _React$Component);

  function Paragraph(props) {
    var _this;

    _classCallCheck(this, Paragraph);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Paragraph).call(this, props));
    _this.handleReadyRender = _this.handleReadyRender.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Paragraph, [{
    key: "handleReadyRender",
    value: function handleReadyRender() {
      var children = this.props.children;
      return children;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          lineNumber = _this$props.lineNumber,
          textSize = _this$props.textSize,
          color = _this$props.color,
          width = _this$props.width,
          lastLineWidth = _this$props.lastLineWidth,
          firstLineWidth = _this$props.firstLineWidth,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["lineNumber", "textSize", "color", "width", "lastLineWidth", "firstLineWidth", "children"]);

      var lines = [];

      for (var i = 0; i < lineNumber; i++) {
        if (i === 0) {
          lines.push(React.createElement(Line, {
            textSize: textSize,
            color: color,
            width: firstLineWidth,
            key: i
          }));
        } else if (i === lineNumber - 1) {
          lines.push(React.createElement(Line, {
            textSize: textSize,
            color: color,
            width: lastLineWidth,
            key: i
          }));
        } else {
          lines.push(React.createElement(Line, {
            textSize: textSize,
            color: color,
            width: width,
            key: i
          }));
        }
      }

      return React.createElement(Placeholder, _extends({}, props, {
        whenReadyRender: this.handleReadyRender
      }), lines);
    }
  }]);

  return Paragraph;
}(React.Component);
Paragraph.propTypes = {
  lineNumber: propTypes.number.isRequired,
  textSize: propTypes.number,
  color: propTypes.string,
  width: propTypes.string,
  lastLineWidth: propTypes.string,
  firstLineWidth: propTypes.string
};
Paragraph.defaultProps = {
  textSize: 12,
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%'
};

var stylify = function stylify(computeStyles) {
  return function (Component) {
    var StyledComponent = function StyledComponent(_ref) {
      var style = _ref.style,
          otherProps = _objectWithoutProperties(_ref, ["style"]);

      var styles = _objectSpread({}, computeStyles(otherProps), style);

      return React.createElement(Component, _extends({}, otherProps, {
        style: styles
      }));
    };

    StyledComponent.propTypes = {
      style: propTypes.shape({})
    };
    StyledComponent.defaultProps = {
      style: {}
    };
    return StyledComponent;
  };
};

var computeStyleMedia = (function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      _ref$hasRadius = _ref.hasRadius,
      hasRadius = _ref$hasRadius === void 0 ? false : _ref$hasRadius,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#efefef' : _ref$color;
  return {
    height: size,
    width: size,
    borderRadius: hasRadius ? size / 2 : 3,
    backgroundColor: color
  };
});

var computeStyleBox = (function (_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? 50 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 50 : _ref$width,
      _ref$radius = _ref.radius,
      radius = _ref$radius === void 0 ? 0 : _ref$radius,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#efefef' : _ref$color;
  return {
    height: height,
    width: width,
    borderRadius: radius,
    backgroundColor: color
  };
});

var Media = stylify(computeStyleMedia)(reactNative.View);
var Box = stylify(computeStyleBox)(reactNative.View);

var ImageContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageContent, _React$Component);

  function ImageContent(props) {
    var _this;

    _classCallCheck(this, ImageContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageContent).call(this, props));
    _this.renderLeft = _this.renderLeft.bind(_assertThisInitialized(_this));
    _this.renderRight = _this.renderRight.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ImageContent, [{
    key: "renderLeft",
    value: function renderLeft() {
      var _this$props = this.props,
          position = _this$props.position,
          hasRadius = _this$props.hasRadius;
      return position === 'left' ? React.createElement(Media, {
        hasRadius: hasRadius
      }) : null;
    }
  }, {
    key: "renderRight",
    value: function renderRight() {
      var _this$props2 = this.props,
          position = _this$props2.position,
          hasRadius = _this$props2.hasRadius;
      return position === 'right' ? React.createElement(Media, {
        hasRadius: hasRadius
      }) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          position = _this$props3.position,
          size = _this$props3.size,
          hasRadius = _this$props3.hasRadius,
          lineNumber = _this$props3.lineNumber,
          textSize = _this$props3.textSize,
          color = _this$props3.color,
          width = _this$props3.width,
          lastLineWidth = _this$props3.lastLineWidth,
          firstLineWidth = _this$props3.firstLineWidth,
          props = _objectWithoutProperties(_this$props3, ["position", "size", "hasRadius", "lineNumber", "textSize", "color", "width", "lastLineWidth", "firstLineWidth"]);

      return React.createElement(Paragraph, _extends({}, props, {
        lineNumber: lineNumber,
        textSize: textSize,
        color: color,
        width: width,
        lastLineWidth: lastLineWidth,
        firstLineWidth: firstLineWidth,
        renderLeft: this.renderLeft,
        renderRight: this.renderRight
      }));
    }
  }]);

  return ImageContent;
}(React.Component);
ImageContent.propTypes = {
  position: propTypes.string,
  size: propTypes.number,
  hasRadius: propTypes.bool,
  animation: propTypes.string,
  lineNumber: propTypes.number.isRequired,
  textSize: propTypes.number,
  color: propTypes.string,
  width: propTypes.string,
  lastLineWidth: propTypes.string,
  firstLineWidth: propTypes.string
};
ImageContent.defaultProps = {
  position: 'left',
  size: 40,
  hasRadius: false,
  animation: null,
  textSize: 12,
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%'
};

exports.default = Placeholder;
exports.connect = connect;
exports.Paragraph = Paragraph;
exports.Line = Line;
exports.Media = Media;
exports.Box = Box;
exports.ImageContent = ImageContent;
