import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  Shine,
  ShineOverlay,
  Loader
} from "rn-placeholder";
import { Card } from "./components/Card";
import { Code } from "./components/Code";
import { Title } from "./components/Title";

export const App = () => (
  <ScrollView style={styles.container}>
    <Card>
      <Title>Fade</Title>
      <Placeholder
        Left={PlaceholderMedia}
        Right={PlaceholderMedia}
        Animation={Fade}
      >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>

      <Code
        code={`<Placeholder
Left={PlaceholderMedia}
Right={PlaceholderMedia}
Animation={Fade}
>
<PlaceholderLine width={80} />
<PlaceholderLine />
<PlaceholderLine width={30} />
</Placeholder>`}
      />
    </Card>

    <Card>
      <Title>Loader</Title>
      <Placeholder
        Left={PlaceholderMedia}
        Right={PlaceholderMedia}
        Animation={Loader}
      >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>

      <Code
        code={`<Placeholder
Left={PlaceholderMedia}
Right={PlaceholderMedia}
Animation={Loader}
>
<PlaceholderLine width={80} />
<PlaceholderLine />
<PlaceholderLine width={30} />
</Placeholder>`}
      />
    </Card>

    <Card>
      <Title>Shine</Title>
      <Placeholder
        Left={PlaceholderMedia}
        Right={PlaceholderMedia}
        Animation={Shine}
      >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>

      <Code
        code={`<Placeholder
Left={PlaceholderMedia}
Right={PlaceholderMedia}
Animation={Shine}
>
<PlaceholderLine width={80} />
<PlaceholderLine />
<PlaceholderLine width={30} />
</Placeholder>`}
      />
    </Card>

    <Card>
      <Title>ShineOverlay</Title>
      <Placeholder
        Left={PlaceholderMedia}
        Right={PlaceholderMedia}
        Animation={ShineOverlay}
      >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>

      <Code
        code={`<Placeholder
Left={PlaceholderMedia}
Right={PlaceholderMedia}
Animation={ShineOverlay}
>
<PlaceholderLine width={80} />
<PlaceholderLine />
<PlaceholderLine width={30} />
</Placeholder>`}
      />
    </Card>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width: 400,
    alignSelf: "center"
  }
});
