# ImageContent

<p align="center">
  <img src="./images/imagecontent.gif" />
</p>

### Usage

```jsx
<Placeholder.ImageContent
  position="right"
  hasRadius
  lineNumber={5}
  textSize={14}
  lineSpacing={5}
  color="#00ff00"
  width="100%"
  lastLineWidth="30%"
  firstLineWidth="10%"
  onReady={this.state.isReady}
>
  <Text>Placeholder finished</Text>
</Placeholder.ImageContent>
```

### API

| Props            | Type      | Default value   | Description                                  |
| ---------------- | --------- | --------------- | -------------------------------------------- |
| `position`       | `String`  | `left`          | Position of the media content (right / left) |
| `hasRadius`      | `Boolean` | `false`         | Do the media have radius                     |
| `lineNumber`     | `Number`  | mandatory props | Number of line to display                    |
| `textSize`       | `Number`  | `12`            | Text size of the line                        |
| `lineSpacing`    | `Number`  | `12`            | The space between each lines                 |
| `color`          | `String`  | `#efefef`       | The color of the lines                       |
| `width`          | `String`  | `100%`          | The lines width in percentage                |
| `lastLineWidth`  | `String`  | `100%`          | The last line width for visual effects       |
| `firstLineWidth` | `String`  | `100%`          | The first line width for visual effects      |
