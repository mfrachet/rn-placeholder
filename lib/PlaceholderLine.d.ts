import React from "react";
import { ViewProps } from "react-native";
import { IPlaceholderElement } from "./Placeholder";
export interface ILine extends IPlaceholderElement, ViewProps {
    height?: number;
    color?: string;
    width?: number;
    hasMargin?: boolean;
    style?: ViewProps["style"];
}
export declare const PlaceholderLine: React.FC<ILine>;
