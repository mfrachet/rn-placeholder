"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Placeholder = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Raw_1 = require("./animations/Raw");
var tokens_1 = require("./tokens");
exports.Placeholder = function (_a) {
    var children = _a.children, style = _a.style, Left = _a.Left, Right = _a.Right, Animation = _a.Animation, props = __rest(_a, ["children", "style", "Left", "Right", "Animation"]);
    var AnimationProvider = Animation || Raw_1.Raw;
    return (react_1["default"].createElement(AnimationProvider, null,
        react_1["default"].createElement(react_native_1.View, __assign({ style: [styles.row, style] }, props),
            Left && react_1["default"].createElement(Left, { style: styles.left }),
            react_1["default"].createElement(react_native_1.View, { style: styles.full }, children),
            Right && react_1["default"].createElement(Right, { style: styles.right }))));
};
var styles = react_native_1.StyleSheet.create({
    full: {
        flex: 1
    },
    left: {
        marginRight: tokens_1.SIZES.normal
    },
    right: {
        marginLeft: tokens_1.SIZES.normal
    },
    row: { flexDirection: "row", width: "100%" }
});
//# sourceMappingURL=Placeholder.js.map