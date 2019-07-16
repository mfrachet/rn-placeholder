import React from "react";
export interface IShine {
    duration?: number;
}
export declare class ShineOverlay extends React.Component<IShine> {
    private animation;
    constructor(props: IShine);
    componentDidMount(): void;
    render(): JSX.Element;
    private start;
}
