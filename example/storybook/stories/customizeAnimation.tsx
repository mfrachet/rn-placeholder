import React from "react";
import { ScrollView } from "react-native";
import {
  Fade,
  Loader,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  Shine
} from "../../placeholder";
import { Card } from "../components/Card";
import { Code } from "../components/Code";
import { Title } from "../components/Title";

const darkStyle = {
  backgroundColor: "#999999"
};

export default () => (
  <ScrollView>
    <Card dark>
      <Title color="white">Custom Shine animation</Title>
      <Placeholder
        Animation={props => (
          <Shine {...props} style={{ backgroundColor: "red" }} />
        )}
        Left={props => (
          <PlaceholderMedia {...props} style={[props.style, darkStyle]} />
        )}
      >
        <PlaceholderLine width={80} style={darkStyle} />
        <PlaceholderLine style={darkStyle} />
        <PlaceholderLine width={30} style={darkStyle} />
      </Placeholder>

      <Code
        code={`<Placeholder
Animation={props => (
    <Shine {...props} style={{ backgroundColor: "red" }} />
)}
Left={props => (
    <PlaceholderMedia {...props} style={[props.style, darkStyle]} />
)}>
    <PlaceholderLine width={80} style={darkStyle} />
    <PlaceholderLine style={darkStyle} />
    <PlaceholderLine width={30} style={darkStyle} />
</Placeholder>`}
      />
    </Card>

    <Card dark>
      <Title color="white">Custom Fade animation</Title>
      <Placeholder
        Animation={props => (
          <Fade {...props} style={{ backgroundColor: "blue" }} />
        )}
        Left={props => (
          <PlaceholderMedia {...props} style={[props.style, darkStyle]} />
        )}
      >
        <PlaceholderLine width={80} style={darkStyle} />
        <PlaceholderLine style={darkStyle} />
        <PlaceholderLine width={30} style={darkStyle} />
      </Placeholder>

      <Code
        code={`<Placeholder
Animation={props => (
    <Fade {...props} style={{ backgroundColor: "blue" }} />
)}
Left={props => (
    <PlaceholderMedia {...props} style={[props.style, darkStyle]} />
)}>
    <PlaceholderLine width={80} style={darkStyle} />
    <PlaceholderLine style={darkStyle} />
    <PlaceholderLine width={30} style={darkStyle} />
</Placeholder>
        `}
      />
    </Card>

    <Card>
      <Title>Custom Loader animation</Title>
      <Placeholder
        Animation={props => <Loader {...props} size="large" color="blue" />}
        Left={PlaceholderMedia}
      >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>

      <Code
        code={`<Placeholder
Animation={props => <Loader {...props} size="large" color="blue" />}
Left={PlaceholderMedia}>
    <PlaceholderLine width={80} />
    <PlaceholderLine />
    <PlaceholderLine width={30} />
</Placeholder>`}
      />
    </Card>
  </ScrollView>
);
