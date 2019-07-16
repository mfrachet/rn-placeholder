import React from "react";
import { ScrollView } from "react-native";
import {
  Fade,
  Loader,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  Shine,
  ShineOverlay
} from "../../placeholder";
import { Card } from "../components/Card";
import { Code } from "../components/Code";
import { Title } from "../components/Title";

export default () => (
  <ScrollView>
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
