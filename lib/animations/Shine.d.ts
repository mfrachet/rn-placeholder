import React from "react";
import { ViewProps } from "react-native";
export interface IShine extends ViewProps {
    duration?: number;
    reverse?: boolean;
}
export declare class Shine extends React.Component<IShine> {
    private animation;
    constructor(props: IShine);
    componentDidMount(): void;
    render(): JSX.Element;
    private start;
}
