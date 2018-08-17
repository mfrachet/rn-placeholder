# Built in

The project comes with a `connect` HOC that brings three global props to every components, `onReady`, `customAnimate` and `animate`.

The `animate` props uses built in animations such as [`shine`](https://github.com/mfrachet/rn-placeholder/tree/master/src/animation/shine.js) or [`fade`](https://github.com/mfrachet/rn-placeholder/tree/master/src/animation/fade.js) to animate the placeHolder with a visual effect while waiting for the content to appear.

If you want to display a built in animation, simply specify the props on your `Placeholder` component :

<p align="center">
  <img src ="./images/shine.gif" />
</p>

```jsx
<Placeholder.ImageContent
  onReady={this.state.isReady}
  lineNumber={2}
  animate="shine"
  lastLineWidth="40%"
>
  <Text>Animated placeholder</Text>
</Placeholder.ImageContent>
```
