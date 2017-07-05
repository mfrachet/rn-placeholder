----------

# Animations

The project allows transitions between a `loading` and a `loaded` state.

These animations have to expose a specific API to make the project open to extensions and external behaviours.

* <a href="#api">Animations API</a>
* <a href="#default">Default animations</a>
* <a href="#custom">Custom animations</a>

<h2 name="API">Animations API</h2>

Here's the constraints needed to use Animations inside of [rn-placeholder](./README.md)

**start**

Type: `function`

Start the animation

**style**

Type: `object`

Style of the application


*Example*
```javascript

/**
 * Create a repetitive fadein / fadeout animation
 */
export default () => {
  const START_VALUE = 0.5;
  const animation = new Animated.Value(START_VALUE);

  function start() {
    return Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }),
      Animated.timing(animation, {
        toValue: START_VALUE,
        duration: 500,
      }),
    ]).start((e) => {
      if (e.finished) {
        start();
      }
    });
  }

  /**
   * The two mandatory properties to return
   */
  return {
    style: { opacity: animation },
    start,
  };
};
```

<h2 name="default">Default animations</h2>

The project comes with some default animations located in [src/animation](./src/animation). It simply animates the placeholder with visual effects while waiting the real content to appear.

Adding an animation is possible using the [React Native Animated](https://facebook.github.io/react-native/docs/animations.html) component.

You can contribute by creating your own placeholder animations and submitting a pull request.

It doesn't need too much extra code compared to a standard react native animation, except the previous API.

<h2 name="custom">Custom animations</h2>

Recently, the project has allowed to use custom animations, always following the below API by using the HoC props : `customAnimate`. It accepts a `function` representing an Animation. From the [Example Folder](./Example/customAnimation.js), we have created a simple animation based on color transitions.

To use this in the code, simply use a `Placeholder` component with the `customAnimate` props :

```javascript
<Placeholder.Media onReady={this.state.isReadyMedia} customAnimate={CustomAnimation}>
  <Text>Media loaded</Text>
</Placeholder.Media>
```
