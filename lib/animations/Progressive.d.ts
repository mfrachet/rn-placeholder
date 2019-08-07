import React from "react";
import { ViewProps } from "react-native";
export interface IProgressive extends ViewProps {
    color?: string;
}
export declare class Progressive extends React.Component<IProgressive> {
    private animation;
    constructor(props: IProgressive);
    componentDidMount(): void;
    render(): JSX.Element;
    private start;
}
