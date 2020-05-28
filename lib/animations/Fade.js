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
var START_VALUE = 0.5;
var END_VALUE = 1;
var useNativeDriver = true;
var isInteraction = false;
var Fade = /** @class */ (function (_super) {
    __extends(Fade, _super);
    function Fade(props) {
        var _this = _super.call(this, props) || this;
        _this.animation = new react_native_1.Animated.Value(START_VALUE);
        return _this;
    }
    Fade.prototype.componentDidMount = function () {
        this.start();
    };
    Fade.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style;
        var animationStyle = {
            backgroundColor: "#dfdfdf",
            height: "100%",
            opacity: this.animation
        };
        return react_1["default"].createElement(context_1.Provider, { value: [animationStyle, style] }, children);
    };
    Fade.prototype.start = function () {
        var _this = this;
        var duration = this.props.duration;
        react_native_1.Animated.sequence([
            react_native_1.Animated.timing(this.animation, {
                duration: duration,
                isInteraction: isInteraction,
                toValue: END_VALUE,
                useNativeDriver: useNativeDriver
            }),
            react_native_1.Animated.timing(this.animation, {
                duration: duration,
                isInteraction: isInteraction,
                toValue: START_VALUE,
                useNativeDriver: useNativeDriver
            })
        ]).start(function (e) {
            if (e.finished) {
                _this.start();
            }
        });
    };
    Fade.defaultProps = {
        duration: 500
    };
    return Fade;
}(react_1["default"].Component));
exports.Fade = Fade;
//# sourceMappingURL=Fade.js.map