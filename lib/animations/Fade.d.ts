import React from "react";
import { ViewProps } from "react-native";
export interface IFade extends ViewProps {
    duration?: number;
}
export declare class Fade extends React.Component<IFade> {
    static defaultProps: {
        duration: number;
    };
    private animation;
    constructor(props: IFade);
    componentDidMount(): void;
    render(): JSX.Element;
    private start;
}
