import React from "react";
import { ScrollView } from "react-native";
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia
} from "../../placeholder";
import { Card } from "../components/Card";
import { Code } from "../components/Code";
import { Title } from "../components/Title";

export default () => (
  <ScrollView>
    <Card>
      <Title>Green media and red line</Title>
      <Placeholder
        Left={props => (
          <PlaceholderMedia
            isRound={true}
            style={[{ backgroundColor: "green" }, props.style]}
          />
        )}
        Right={PlaceholderMedia}
      >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} style={{ backgroundColor: "red" }} />
      </Placeholder>

      <Code
        code={`<Placeholder
  Left={props => (
    <PlaceholderMedia
      isRound={true}
      style={[{ backgroundColor: "green" }, props.style]}
    />
  )}
  Right={PlaceholderMedia}
>
  <PlaceholderLine width={80} />
  <PlaceholderLine />
  <PlaceholderLine width={30} style={{ backgroundColor: "red" }} />
</Placeholder>`}
      />
    </Card>
  </ScrollView>
);
