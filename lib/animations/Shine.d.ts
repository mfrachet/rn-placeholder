import React from "react";
import { ViewProps } from "react-native";
export interface ShineProps extends ViewProps {
    duration?: number;
    reverse: boolean;
}
export declare const Shine: React.FC<ShineProps>;
