import React from "react";
import { ViewProps } from "react-native";
export interface ILine extends ViewProps {
    height?: number;
    color?: string;
    width?: number;
    noMargin?: boolean;
    style?: ViewProps["style"];
}
export declare const PlaceholderLine: React.FC<ILine>;
