import React from "react";
import { ViewProps } from "react-native";
export interface PlaceholderMediaProps extends ViewProps {
    size?: number;
    isRound?: boolean;
    color?: string;
    style?: ViewProps["style"];
}
export declare const PlaceholderMedia: React.FC<PlaceholderMediaProps>;
