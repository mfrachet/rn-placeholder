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
exports.Shine = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var context_1 = require("./context");
var START_VALUE = 0;
var END_VALUE = 100;
var isInteraction = false;
exports.Shine = function (_a) {
    var duration = _a.duration, children = _a.children, style = _a.style, reverse = _a.reverse;
    var animation = react_1.useRef(new react_native_1.Animated.Value(START_VALUE));
    var start = function () {
        animation.current.setValue(START_VALUE);
        react_native_1.Animated.timing(animation.current, {
            duration: duration || 750,
            isInteraction: isInteraction,
            toValue: END_VALUE,
            useNativeDriver: false
        }).start(function (e) {
            if (e.finished) {
                start();
            }
        });
    };
    react_1.useEffect(function () {
        start();
    }, []);
    var left = animation.current.interpolate({
        inputRange: [START_VALUE, END_VALUE],
        outputRange: reverse ? ["100%", "0%"] : ["0%", "100%"]
    });
    return (react_1["default"].createElement(context_1.AnimationContext.Provider, { value: [styles.shine, { left: left }, style] }, children));
};
var styles = react_native_1.StyleSheet.create({
    shine: {
        backgroundColor: "white",
        height: "100%",
        opacity: 0.5,
        width: "40%"
    }
});
//# sourceMappingURL=Shine.js.map