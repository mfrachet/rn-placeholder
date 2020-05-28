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
var START_VALUE = 0;
var END_VALUE = 100;
var isInteraction = false;
var ShineOverlay = /** @class */ (function (_super) {
    __extends(ShineOverlay, _super);
    function ShineOverlay(props) {
        var _this = _super.call(this, props) || this;
        _this.animation = new react_native_1.Animated.Value(0);
        return _this;
    }
    ShineOverlay.prototype.componentDidMount = function () {
        this.start();
    };
    ShineOverlay.prototype.render = function () {
        var children = this.props.children;
        var left = this.animation.interpolate({
            inputRange: [START_VALUE, END_VALUE],
            outputRange: ["0%", "100%"]
        });
        return (react_1["default"].createElement(react_native_1.View, null,
            children,
            react_1["default"].createElement(react_native_1.Animated.View, { style: [styles.shine, { left: left }] })));
    };
    ShineOverlay.prototype.start = function () {
        var _this = this;
        this.animation.setValue(START_VALUE);
        react_native_1.Animated.timing(this.animation, {
            duration: this.props.duration || 750,
            isInteraction: isInteraction,
            toValue: END_VALUE,
            useNativeDriver: false
        }).start(function (e) {
            if (e.finished) {
                _this.start();
            }
        });
    };
    return ShineOverlay;
}(react_1["default"].Component));
exports.ShineOverlay = ShineOverlay;
var styles = react_native_1.StyleSheet.create({
    shine: {
        backgroundColor: "#ffffff",
        height: "100%",
        opacity: 0.4,
        position: "absolute",
        width: 30
    }
});
//# sourceMappingURL=ShineOverlay.js.map