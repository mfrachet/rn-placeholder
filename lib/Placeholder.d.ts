import React from "react";
import { ViewProps } from "react-native";
export interface IPlaceholderElement {
    Animation?: React.ComponentType;
}
export interface IPlaceholder extends ViewProps {
    Animation?: React.ComponentType;
    Left?: React.ComponentType<ViewProps & IPlaceholderElement>;
    Right?: React.ComponentType<ViewProps & IPlaceholderElement>;
}
export declare const Placeholder: React.FC<IPlaceholder>;
