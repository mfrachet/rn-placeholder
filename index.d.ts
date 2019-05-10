declare module 'rn-placeholder' {
  import React from 'react';
  import { ViewStyle } from 'react-native';

  export enum PlaceholderAnimation {
    FADE = 'fade',
    SHINE = 'shine'
  }

  export interface PlaceholderProps {
    animation?: PlaceholderAnimation;
    isReady: boolean;
    whenReadyRender: () => React.ReactNode;
    renderLeft?: () => React.ReactNode;
    renderRight?: () => React.ReactNode;
    children: React.ReactNode;
  }

  export default class Placeholder extends React.Component<PlaceholderProps> {}

  export interface LineProps {
    width?: number | string;
    style?: ViewStyle;
  }

  export class Line extends React.Component<LineProps> {}

  export interface ParagraphProps {
    animation?: PlaceholderAnimation;
    lineNumber: number;
    textSize: number;
    lineSpacing: number;
    color: string;
    width: string;
    lastLineWidth: string;
    firstLineWidth: string;
    isReady: boolean;
  }

  export class Paragraph extends React.Component<ParagraphProps> {}

  export interface MediaProps {
    hasRadius?: boolean;
    style?: ViewStyle;
  }

  export class Media extends React.Component<MediaProps> {}
}
