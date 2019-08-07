"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var context_1 = require("./context");
var START_VALUE = 0;
var END_VALUE = 100;
var DURATION = 750;
var isInteraction = false;
var Progressive = /** @class */ (function (_super) {
    __extends(Progressive, _super);
    function Progressive(props) {
        var _this = _super.call(this, props) || this;
        _this.animation = new react_native_1.Animated.Value(START_VALUE);
        return _this;
    }
    Progressive.prototype.componentDidMount = function () {
        this.start();
    };
    Progressive.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, _b = _a.color, color = _b === void 0 ? "rgba(0,0,0,0.1)" : _b;
        var right = this.animation.interpolate({
            inputRange: [START_VALUE, END_VALUE],
            outputRange: ["0%", "100%"]
        });
        return (react_1["default"].createElement(context_1.Provider, { value: [
                styles.animationStyle,
                style,
                { right: right, backgroundColor: color }
            ] }, children));
    };
    Progressive.prototype.start = function () {
        var _this = this;
        react_native_1.Animated.sequence([
            react_native_1.Animated.timing(this.animation, {
                duration: DURATION,
                isInteraction: isInteraction,
                toValue: END_VALUE
            }),
            react_native_1.Animated.timing(this.animation, {
                duration: DURATION,
                isInteraction: isInteraction,
                toValue: START_VALUE
            })
        ]).start(function (e) {
            if (e.finished) {
                _this.start();
            }
        });
    };
    return Progressive;
}(react_1["default"].Component));
exports.Progressive = Progressive;
var styles = react_native_1.StyleSheet.create({
    animationStyle: {
        height: "100%",
        position: "absolute",
        width: "100%"
    }
});
//# sourceMappingURL=Progressive.js.map