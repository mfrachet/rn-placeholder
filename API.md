----------

## Animation API

The project comes with some default animations located in `src/animation`. It's simply animate the placeholder with visual effects while waiting the real content to resolve.

Adding an animation is possible using the react native [Animated](https://facebook.github.io/react-native/docs/animations.html) component.

You can contribute by creating your own placeholder animations and submitting a pull request.

It doesn't need too much extra code compared to a standard react native animation.

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
