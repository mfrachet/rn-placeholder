"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PlaceholderMedia = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var context_1 = require("./animations/context");
var tokens_1 = require("./tokens");
exports.PlaceholderMedia = function (_a) {
    var _b = _a.size, size = _b === void 0 ? tokens_1.SIZES.xxl : _b, _c = _a.isRound, isRound = _c === void 0 ? false : _c, _d = _a.color, color = _d === void 0 ? tokens_1.COLORS.primary : _d, style = _a.style;
    var computedStyles = {
        backgroundColor: color,
        borderRadius: isRound ? size / 2 : 3,
        height: size,
        width: size
    };
    var animationStyle = context_1.useAnimation();
    return (react_1["default"].createElement(react_native_1.View, { style: [computedStyles, style, styles.media] },
        react_1["default"].createElement(react_native_1.Animated.View, { style: animationStyle })));
};
var styles = react_native_1.StyleSheet.create({
    media: {
        overflow: "hidden"
    }
});
//# sourceMappingURL=PlaceholderMedia.js.map