"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var context_1 = require("./context");
exports.AnimationConsumer = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(context_1.Consumer, null, function (animationStyle) { return (react_1["default"].createElement(react_native_1.Animated.View, { style: animationStyle }, children)); }));
};
//# sourceMappingURL=AnimationConsumer.js.map