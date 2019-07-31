import React from "react";
import { ViewProps } from "react-native";
import { IPlaceholderElement } from "./Placeholder";
export interface IBlock extends IPlaceholderElement, ViewProps {
}
export declare const PlaceholderBlock: React.FC<IBlock>;
