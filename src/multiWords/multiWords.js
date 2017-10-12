import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Line from './../line/line';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

function MultiWords({ words, textSize }) {
  return (
    <View style={styles.container}>
      {words.map((word, index) => (
        <Line key={index} textSize={textSize} color={word.color} width={word.width} />
      ))}
    </View>
  );
}

MultiWords.propTypes = {
  words: PropTypes.arrayOf({}),
  textSize: PropTypes.number,
};

MultiWords.defaultProps = {
  words: [],
  textSize: 12,
};

export default MultiWords;
