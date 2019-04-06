// Type definitions for rn-placeholder 1.3
// Project: https://github.com/mfrachet/rn-placeholder
// Definitions by: Jan Hesters <https://github.com/janhesters>

 import { SFC, Component, ComponentType, ReactNode } from "react";
 import { StyleProp, ViewStyle } from "react-native";

 export interface GenericPlaceholderProps {
    /**
     * How to animate the placeholder.
     */
    animate?: "fade" | "shine";
     /**
     * A custom animation represented by a React.Component;
     */
    customAnimate?: Component;
     /**
     * Whether the component should display its children (true) or the placeholder (false).
     */
    onReady?: boolean;
}
 export interface LineProps extends GenericPlaceholderProps {
    /**
     * Color of the line.
     */
    color?: string;
     /**
     * Text size of the line.
     */
    textSize?: number;
     /**
     * Width of the line, percentage available;
     */
    width?: string;
     /**
     * Arbitrary style object to pass to the Line.
     */
    style?: StyleProp<ViewStyle>
}
 export interface MediaProps extends GenericPlaceholderProps {
    /**
     * Color of the media shape.
     */
    color?: string;
     /**
     * Whether the media place holder be rounded or not.
     */
    hasRadius?: boolean;
     /**
     * The size of the media shape.
     */
    size?: number;
     /**
     * Arbitrary style object to pass to the Media.
     */
    style?: StyleProp<ViewStyle>
}
 export interface ParagraphProps extends GenericPlaceholderProps {
    /**
     * Color of the lines.
     */
    color?: string;
     /**
     * Custom width of the first line.
     */
    firstLineWidth?: string;
     /**
     * Custom width of the last line.
     */
    lastLineWidth?: string;
     /**
     * Number of lines to display.
     */
    lineNumber?: number;
     /**
     * Space between the lines.
     */
    lineSpacing?: number;
     /**
     * Text size of the lines.
     */
    textSize?: number;
     /**
     * Width of the lines.
     */
    width?: string;
}
 export interface ImageContentProps extends ParagraphProps, MediaProps {
    /**
     * Color of the placeholder.
     */
    color?: string;
     /**
     * The position of the media.
     */
    position?: "left" | "right";
}
 export interface BoxProps extends GenericPlaceholderProps {
    /**
     * The background color of the component.
     */
    color?: string;
     /**
     * Height of the component.
     */
    height?: number | string;
     /**
     * The border radius of the component.
     */
    radius?: number;
     /**
     * The width of the component.
     */
    width?: number | string;
     /**
     * Arbitrary style object to pass to the Box.
     */
    style?: StyleProp<ViewStyle>
}
 declare namespace Placeholder {
    /**
     * A React component for displaying a line placeholder.
     */
    const Line: SFC<LineProps>;
     /**
     * A React component for displaying a media placeholder.
     */
    const Media: SFC<MediaProps>;
     /**
     * A React component for displaying a paragraph placeholder.
     */
    const Paragraph: SFC<ParagraphProps>;
     /**
     * A React component for displaying an image content placeholder.
     */
    const ImageContent: SFC<ImageContentProps>;
     /**
     * A React component for displaying a box placeholder.
     */
    const Box: SFC<BoxProps>;
     const connect: () => ReactNode;
}
 export default Placeholder;
