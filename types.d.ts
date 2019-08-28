declare module 'rn-placeholder' {
  import React from 'react'
  import { ViewProperties, ViewStyle } from 'react-native'

  export enum PlaceholderAnimation {
    FADE = 'fade',
    SHINE = 'shine',
  }

  export interface PlaceholderProps {
    animation?: PlaceholderAnimation
    isReady: boolean
    whenReadyRender?: () => React.ReactNode
    customAnimation?: () => React.ComponentType<ViewStyle>
    renderLeft?: () => React.ReactNode
    renderRight?: () => React.ReactNode
    children: React.ReactNode
  }

  export default class Placeholder extends React.Component<PlaceholderProps> {}

  type PlaceholderHOC = <OwnProps>(
    WrappedComponent: React.Component<OwnProps>,
  ) => React.FunctionComponent<PlaceholderProps & OwnProps>

  export const connect: PlaceholderHOC

  export interface LineProps extends ViewProperties {
    textSize?: number
    color?: string
    width?: number | string
    style?: ViewStyle
    noMargin?: boolean
  }

  export class Line extends React.Component<LineProps> {}

  export interface ParagraphProps extends PlaceholderProps {
    lineNumber: number
    textSize?: number
    lineSpacing: number
    color?: string
    width?: string
    lastLineWidth?: string
    firstLineWidth?: string
  }

  export class Paragraph extends React.Component<ParagraphProps> {}

  export interface MediaProps extends ViewProperties {
    hasRadius?: boolean
    style?: ViewStyle
    color?: string
    size?: number
  }

  export class Media extends React.Component<MediaProps> {}

  export interface BoxProps extends ViewProperties {
    height?: number
    width?: number
    radius?: number
    color?: string
  }

  export class Box extends React.Component<BoxProps> {}

  export enum ImageContentPosition {
    LEFT = 'left',
    RIGHT = 'right',
  }

  export interface ImageContentProps extends ParagraphProps {
    position?: ImageContentPosition
    size?: number
    hasRadius?: boolean
  }

  export class ImageContent extends React.Component<ImageContentProps> {}
}
