import React from "react";
import { ViewProps } from "react-native";
export interface FadeProps extends ViewProps {
    duration?: number;
}
export declare const Fade: React.FC<FadeProps>;
