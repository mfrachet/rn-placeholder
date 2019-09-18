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
var isInteraction = false;
var Shine = /** @class */ (function (_super) {
    __extends(Shine, _super);
    function Shine(props) {
        var _this = _super.call(this, props) || this;
        _this.animation = new react_native_1.Animated.Value(0);
        return _this;
    }
    Shine.prototype.componentDidMount = function () {
        this.start();
    };
    Shine.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, reverse = _a.reverse;
        var outputRange = reverse ? ["100%", "0%"] : ["0%", "100%"];
        var left = this.animation.interpolate({
            inputRange: [START_VALUE, END_VALUE],
            outputRange: outputRange
        });
        return (react_1["default"].createElement(context_1.Provider, { value: [styles.shine, { left: left }, style] }, children));
    };
    Shine.prototype.start = function () {
        var _this = this;
        this.animation.setValue(START_VALUE);
        react_native_1.Animated.timing(this.animation, {
            duration: this.props.duration || 750,
            isInteraction: isInteraction,
            toValue: END_VALUE
        }).start(function (e) {
            if (e.finished) {
                _this.start();
            }
        });
    };
    return Shine;
}(react_1["default"].Component));
exports.Shine = Shine;
var styles = react_native_1.StyleSheet.create({
    shine: {
        backgroundColor: "white",
        height: "100%",
        opacity: 0.5,
        width: "40%"
    }
});
//# sourceMappingURL=Shine.js.map