"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.Fade = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var context_1 = require("./context");
var START_VALUE = 0.5;
var END_VALUE = 1;
var useNativeDriver = true;
var isInteraction = false;
exports.Fade = function (_a) {
    var _b = _a.duration, duration = _b === void 0 ? 500 : _b, children = _a.children, style = _a.style;
    var animation = react_1.useRef(new react_native_1.Animated.Value(START_VALUE));
    var start = function () {
        react_native_1.Animated.sequence([
            react_native_1.Animated.timing(animation.current, {
                duration: duration,
                isInteraction: isInteraction,
                toValue: END_VALUE,
                useNativeDriver: useNativeDriver
            }),
            react_native_1.Animated.timing(animation.current, {
                duration: duration,
                isInteraction: isInteraction,
                toValue: START_VALUE,
                useNativeDriver: useNativeDriver
            }),
        ]).start(function (e) {
            if (e.finished) {
                start();
            }
        });
    };
    react_1["default"].useEffect(function () {
        start();
    }, []);
    var animationStyle = {
        backgroundColor: "#dfdfdf",
        height: "100%",
        opacity: animation.current
    };
    return (react_1["default"].createElement(context_1.AnimationContext.Provider, { value: [animationStyle, style] }, children));
};
//# sourceMappingURL=Fade.js.map