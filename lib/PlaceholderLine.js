"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var tokens_1 = require("./tokens");
exports.PlaceholderLine = function (_a) {
    var _b = _a.Animation, Animation = _b === void 0 ? react_1["default"].Fragment : _b, _c = _a.height, height = _c === void 0 ? tokens_1.SIZES.normal : _c, _d = _a.color, color = _d === void 0 ? tokens_1.COLORS.primary : _d, _e = _a.width, width = _e === void 0 ? 100 : _e, _f = _a.hasMargin, hasMargin = _f === void 0 ? false : _f, style = _a.style;
    var backgroundColor = color;
    var borderRadius = height / 4;
    var marginBottom = hasMargin ? height : 0;
    var computedStyle = {
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        height: height,
        marginBottom: marginBottom,
        width: width + "%"
    };
    return (react_1["default"].createElement(react_native_1.View, { style: [computedStyle, style, styles.line] },
        react_1["default"].createElement(Animation, null)));
};
var styles = react_native_1.StyleSheet.create({
    line: {
        overflow: "hidden"
    }
});
//# sourceMappingURL=PlaceholderLine.js.map