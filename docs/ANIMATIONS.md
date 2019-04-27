# Animations

## Default animations

The project comes with some default animations located in [src/animation](./src/animation). It simply animates the placeholder with visual effects while waiting the real content to appear.

Adding an animation is possible using the [React Native Animated](https://facebook.github.io/react-native/docs/animations.html) component.

You can contribute by creating your own placeholder animations and submitting a pull request.

## Custom animations

It's also possible to create custom animations using the `customAnimation` props of the `Placeholder` component:

```jsx
<Placeholder
  customAnimation={ColorAnimation}
  isReady={isReady}
  whenReadyRender={ComponentLoaded}
>
  <Line width="70%" />
  <Line />
  <Line />
  <Line width="30%" />
</Placeholder>
```

The `ColorAnimation` can be defined this way:

```javascript
import React from "react";
import { Animated } from "react-native";

export const ColorAnimation = ({ children }) => {
  const animation = new Animated.Value(0);

  function start() {
    return Animated.timing(animation, {
      toValue: 100,
      duration: 1500
    }).start(e => {
      if (e.finished) {
        start();
      }
    });
  }

  start();

  const backgroundColor = animation.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ["yellow", "orange", "blue"]
  });

  const style = { backgroundColor, padding: 20 };

  return <Animated.View style={style}>{children}</Animated.View>;
};
```
