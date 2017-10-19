# Custom animation

`rn-placeholder` exposes a `customAnimate` `props` through its HOC so that you can build your own animation.

For example, the following animation :

```javascript
import React from "react";
import { Animated } from "react-native";

const Colors = ({ children }) => {
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

export default Colors;
```

provides a custom animation that switches color when loading. It's possible to use it this way :

```html
<Placeholder.ImageContent
  onReady={isLoaded}
  lineNumber={2}
  customAnimate={ColorAnimation}
  lastLineWidth="40%"
>
  <ComponentToRenderAfterAsyncStuff />
</Placeholder.ImageContent />
```

<p align="center">
  <img src="./images/customanimation.gif" />
</p>
