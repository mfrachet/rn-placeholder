<p align="center">
<img
width="200" src="https://img15.hostingpics.net/pics/581590skeletonloader.gif"/>
<img
width="200" src="https://img15.hostingpics.net/pics/999328skeletonloaderios.gif"/>
<img
width="200" src="https://img15.hostingpics.net/pics/198734skeletonloaderandroid.gif"/>
</p>


# Components

The project currently supports 4 different placeholder components.

Each of this components are wrapped in a HOC that brings two others (optional) props :

- `animate: String`: An optional animation available in the `src/animations` folder (see also [Animation API](ANIMATIONS.md)
- `onReady: any`: A value. If it's different from `null` / `undefined` / `empty string` / `0`, the component children are rendered. This props creates the loading feeling and the component apparition when content is loaded.
- `customAnimate: func`: An animation functions that follows the [Animation API](ANIMATIONS.md) to create your own custom animations


Navigate the API documentation :

- <a href="#line">Line</a>
- <a href="#media">Media</a>
- <a href="#paragraph">Paragraph</a>
- <a href="#imgcontent">Image content</a>
- <a href="#custom">Custom components</a>

<h2 name="line">Line</h2>

Display a simple line on the screen.

#### Props available

- `textSize: String`: Text size of the Line
- `color: String`: Color of the line
- `width: String`: Width of the line, percentage available

#### Example

```javascript
<Placeholder.Line
  color="#ffff00"
  width="77%"
/>
```

<h2 name="media">Media</h2>

Display a shape that represent a media placeholder

#### Props available

- `size: Number`: The size of the media shape (default: `40`)
- `hasRadius: Boolean`: Is the shape rounded or not ? (default: `false`)
- `color: String`: Color of the media shape (default: `#efefef`)

#### Example

```javascript
<Placeholder.Media
  size={70}
  color="#0000ff"
  hasRadius
/>
```

<h2 name="paragraph">Paragraph</h2>

Display a set of lines called a Paragraph

#### Props available

- `lineNumber: Number`: Number of line to display (mandatory)
- `textSize: Number`: Text size of a single Line (default: `12`)
- `lineSpacing: Number`: Space between the lines (default: `12`)
- `color: String`: Color of the lines (default: `#efefef`)
- `width: String`: Width of the lines (default: `100%`)
- `lastLineWidth: String`: Custom width of the last line (default: `100%`)
- `firstLineWidth: String`: Custom width of the first line (default: `100%`)

#### Example

```javascript
<Placeholder.Paragraph
  lineNumber={3}
  textSize={16}
  lineSpacing={5}
  color="#ff0000"
  width="100%"
  lastLineWidth="70%"
  firstLineWidth="50%"
/>
```

<h2 name="imgcontent">Image content</h2>

Display a Media on the left / right part of a Paragraph

#### Props available

- `position: String`: The position of the Media (left / right) (default: `left`)
- `hasRadius: Boolean`: Is the shape of the media rounded or not ? (default: `false`)
- `lineNumber: Number`: Number of line to display (mandatory)
- `textSize: Number`: Text size of a single Line (default: `12`)
- `lineSpacing: Number`: Space between the lines (default: `12`)
- `color: String`: Color of the lines (default: `#efefef`)
- `width: String`: Width of the lines (default: `100%`)
- `lastLineWidth: String`: Custom width of the last line (default: `100%`)
- `firstLineWidth: String`: Custom width of the first line (default: `100%`)

#### Example

```javascript
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
/>
```

<h2 name="custom">Custom components</h2>

You can create your own placeholder component based on your own ones. Based on that, we're exposing a `Placeholder.connect` function that returns a new `ComponentContainer`.

This container allows you to use the `onReady` props that will automatically display the placeholder children when its value is true. It also gives you access to the `animate` props that works just as described before, and so, you can take advent from the prebuilt animations of this project.

Taken from the [Example/customPlaceholder.js](./Example/customPlaceholder.js) :

```javascript
import React from 'react';
import { Text } from 'react-native';
import Placeholder from 'rn-placeholder';

const customPlaceholder = (props) => {
  const style = { backgroundColor: props.bgColor };
  return <Text style={style}>I m a custom loader with props bgColor = {props.bgColor}</Text>;
};

export default Placeholder.connect(customPlaceholder);
```
