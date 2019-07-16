import React from "react";
import { ViewProps } from "react-native";
import { IPlaceholderElement } from "./Placeholder";
export interface IMedia extends IPlaceholderElement, ViewProps {
    Animation?: React.ComponentType;
    size?: number;
    isRound?: boolean;
    color?: string;
    style?: ViewProps["style"];
}
export declare const PlaceholderMedia: React.FC<IMedia>;
