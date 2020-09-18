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
exports.Loader = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
exports.Loader = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.loader },
        children,
        react_1["default"].createElement(react_native_1.ActivityIndicator, __assign({}, props, { style: [styles.indicator, props.style] }))));
};
var styles = react_native_1.StyleSheet.create({
    indicator: { position: "absolute", height: "100%" },
    loader: {
        alignItems: "center",
        justifyContent: "center"
    }
});
//# sourceMappingURL=Loader.js.map