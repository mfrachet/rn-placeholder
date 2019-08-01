import React from "react";
import { ViewProps } from "react-native";
export interface IPlaceholder extends ViewProps {
    Animation?: React.ComponentType;
    Left?: React.ComponentType<ViewProps>;
    Right?: React.ComponentType<ViewProps>;
}
export declare const Placeholder: React.FC<IPlaceholder>;
