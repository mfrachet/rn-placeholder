import React from "react";
import {
  Alert,
  Clipboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { github } from "react-syntax-highlighter/styles/prism";

interface ICode {
  code: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 3,
    marginTop: 24
  },
  copy: {
    backgroundColor: "#2196F3",
    borderRadius: 30,
    margin: 12,
    padding: 12
  }
});

const handleClipBoard = (code: string) => {
  Clipboard.setString(code);
  Alert.alert("Code saved in clipboard 🎉");
};

export const Code: React.FC<ICode> = ({ code }) => (
  <View style={styles.container}>
    <SyntaxHighlighter
      language="jsx"
      style={github}
      highlighter="prism"
      customStyle={styles.container}
    >
      {code}
    </SyntaxHighlighter>
    <TouchableOpacity onPress={() => handleClipBoard(code)} style={styles.copy}>
      <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
        Copy code
      </Text>
    </TouchableOpacity>
  </View>
);
