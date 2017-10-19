# Animations


## Default animations

The project comes with some default animations located in [src/animation](./src/animation). It simply animates the placeholder with visual effects while waiting the real content to appear.

Adding an animation is possible using the [React Native Animated](https://facebook.github.io/react-native/docs/animations.html) component.

You can contribute by creating your own placeholder animations and submitting a pull request.


## Custom animations

Recently, the project has allowed to use custom animations by using the HoC props : `customAnimate`. It accepts a `React.Component` representing an Animation.

From the [Example Folder](./Example/customAnimation.js), we have created a simple animation based on color transitions.

To use this in the code, simply use a `Placeholder` component with the `customAnimate` props :

```javascript
<Placeholder.Media onReady={this.state.isReadyMedia} customAnimate={CustomAnimation}>
  <Text>Media loaded</Text>
</Placeholder.Media>
```
