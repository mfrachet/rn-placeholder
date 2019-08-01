import React from "react";
import { ScrollView, View } from "react-native";
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  ShineOverlay
} from "../../placeholder";
import { Card } from "../components/Card";
import { Code } from "../components/Code";
import { Title } from "../components/Title";

export default () => (
  <ScrollView>
    <Card>
      <Title>Custom position and shapes</Title>
      <Placeholder Left={PlaceholderMedia} Animation={ShineOverlay}>
        <PlaceholderLine height={80} style={{ marginBottom: 12 }} />
        <PlaceholderLine />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12
          }}
        >
          <PlaceholderMedia />
          <PlaceholderMedia />
          <PlaceholderMedia />
        </View>
        <PlaceholderLine />
      </Placeholder>

      <Code
        code={`<Placeholder Left={PlaceholderMedia} Animation={ShineOverlay}>
	<PlaceholderLine height={80} style={{ marginBottom: 12 }} />
	<PlaceholderLine />
	<View
		style={{
			flexDirection: "row",
			justifyContent: "space-between",
			marginBottom: 12
		}}
	>
		<PlaceholderMedia />
		<PlaceholderMedia />
		<PlaceholderMedia />
	</View>
	<PlaceholderLine />
</Placeholder>`}
      />
    </Card>
  </ScrollView>
);
