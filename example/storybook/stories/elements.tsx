import React from "react";
import { ScrollView } from "react-native";
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  PlaceholderBlock,
  Fade,
  Shine,
  ShineOverlay,
  Loader
} from "../../placeholder";
import { Card } from "../components/Card";
import { Code } from "../components/Code";
import { Title } from "../components/Title";

export default () => (
  <ScrollView>
    <Card>
      <Title>With 2 medias</Title>
      <Placeholder Left={PlaceholderMedia} Right={PlaceholderMedia}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>

      <Code
        code={`<Placeholder Left={PlaceholderMedia} Right={PlaceholderMedia}>
  <PlaceholderLine width={80} />
  <PlaceholderLine />
  <PlaceholderLine width={30} />
</Placeholder>`}
      />
    </Card>

    <Card>
      <Title>With 1 media on the left</Title>
      <Placeholder Left={PlaceholderMedia}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>

      <Code
        code={`<Placeholder Left={PlaceholderMedia}>
  <PlaceholderLine width={80} />
  <PlaceholderLine />
  <PlaceholderLine width={30} />
</Placeholder>`}
      />
    </Card>

    <Card>
      <Title>With 1 media on the right</Title>
      <Placeholder Right={PlaceholderMedia}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>

      <Code
        code={`<Placeholder Right={PlaceholderMedia}>
  <PlaceholderLine width={80} />
  <PlaceholderLine />
  <PlaceholderLine width={30} />
</Placeholder>`}
      />
    </Card>

    <Card>
      <Title>With no media</Title>
      <Placeholder>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>

      <Code
        code={`<Placeholder>
  <PlaceholderLine width={80} />
  <PlaceholderLine />
  <PlaceholderLine width={30} />
</Placeholder>`}
      />
    </Card>
    <Card>
      <Title>Custom positionning</Title>
      <Placeholder>
        <PlaceholderLine width={80} height={30} style={{ marginBottom: 10 }} />
        <PlaceholderLine />
        <PlaceholderBlock style={{ flexDirection: "row" }}>
          <PlaceholderMedia style={{ flex: 1, marginRight: 10 }} />
          <PlaceholderMedia style={{ flex: 1, marginRight: 10 }} />
          <PlaceholderMedia style={{ flex: 1 }} />
        </PlaceholderBlock>
      </Placeholder>

      <Code
        code={`<Placeholder>
  <PlaceholderLine width={80} height={30} style={{ marginBottom: 10 }} />
  <PlaceholderLine />
  <PlaceholderBlock style={{ flexDirection: "row" }}>
    <PlaceholderMedia style={{ flex: 1, marginRight: 10 }} />
    <PlaceholderMedia style={{ flex: 1, marginRight: 10 }} />
    <PlaceholderMedia style={{ flex: 1 }} />
  </PlaceholderBlock>
</Placeholder>`}
      />
    </Card>
  </ScrollView>
);
