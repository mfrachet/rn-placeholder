# Custom component

`rn-placeholder` exposes a `connect` HOC that provides higher order props to create your own custom `Placeholder`.

For example, the following custom placeholder :

```javascript
import React from "react";
import { Text } from "react-native";
import Placeholder from "rn-placeholder";

const customPlaceholder = props => {
  const style = { backgroundColor: props.bgColor };
  return (
    <Text style={style}>
      I m a custom loader with props bgColor = {props.bgColor}
    </Text>
  );
};

export default Placeholder.connect(customPlaceholder);
```

provides a custom component that we can use as a placeholder :

```jsx
<CustomPlaceholder onReady={isLoaded} bgColor="red" animate="fade">
  <ComponentToRenderAfterAsyncStuff />
</CustomPlaceholder>
```

<p align="center">
  <img src="./images/customcomponent.gif" />
</p>
