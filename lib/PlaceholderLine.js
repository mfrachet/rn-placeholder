"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PlaceholderLine = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var context_1 = require("./animations/context");
var tokens_1 = require("./tokens");
exports.PlaceholderLine = function (_a) {
    var _b = _a.height, height = _b === void 0 ? tokens_1.SIZES.normal : _b, _c = _a.color, color = _c === void 0 ? tokens_1.COLORS.primary : _c, _d = _a.width, width = _d === void 0 ? 100 : _d, _e = _a.noMargin, noMargin = _e === void 0 ? false : _e, style = _a.style;
    var backgroundColor = color;
    var borderRadius = height / 4;
    var marginBottom = noMargin ? 0 : height;
    var computedStyle = {
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        height: height,
        marginBottom: marginBottom,
        width: width + "%"
    };
    var animationStyle = context_1.useAnimation();
    return (react_1["default"].createElement(react_native_1.View, { style: [computedStyle, style, styles.line] },
        react_1["default"].createElement(react_native_1.Animated.View, { style: animationStyle })));
};
var styles = react_native_1.StyleSheet.create({
    line: {
        overflow: "hidden"
    }
});
//# sourceMappingURL=PlaceholderLine.js.map