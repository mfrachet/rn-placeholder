"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var tokens_1 = require("./tokens");
exports.PlaceholderMedia = function (_a) {
    var _b = _a.Animation, Animation = _b === void 0 ? react_1["default"].Fragment : _b, _c = _a.size, size = _c === void 0 ? tokens_1.SIZES.xxl : _c, _d = _a.isRound, isRound = _d === void 0 ? false : _d, _e = _a.color, color = _e === void 0 ? tokens_1.COLORS.primary : _e, style = _a.style;
    var computedStyles = {
        backgroundColor: color,
        borderRadius: isRound ? size / 2 : 3,
        height: size,
        width: size
    };
    return (react_1["default"].createElement(react_native_1.View, { style: [computedStyles, style, styles.media] },
        react_1["default"].createElement(Animation, null)));
};
var styles = react_native_1.StyleSheet.create({
    media: {
        overflow: "hidden"
    }
});
//# sourceMappingURL=PlaceholderMedia.js.map