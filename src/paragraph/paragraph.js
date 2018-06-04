import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Placeholder from '../placeholder';

const prepareLine = (i, marginBottom, textSize, color, width) => (
  <View key={i} style={{ marginBottom }}>
    <Placeholder.Line textSize={textSize} color={color} width={width} />
  </View>
);

/**
 * Create a paragraph
 * @param lineNumber The number of lines
 * @param textSize The text size (for lines)
 * @param lineSpacing The line spacing size (for lines)
 * @param color The paragraph color
 * @param width The paragraph width
 * @param lastLineWidth The last line width
 * @param firstLineWidth The first line width
 */
function Paragraph({
  lineNumber,
  textSize,
  lineSpacing,
  color,
  width,
  lastLineWidth,
  firstLineWidth,
}) {
  const lines = [];
  const lineRealNumber = lineNumber - 1;

  for (let i = 0; i < lineNumber; i += 1) {
    if (i === lineRealNumber) {
      lines.push(
        <View key={i}>
          <Placeholder.Line textSize={textSize} color={color} width={lastLineWidth} />
        </View>,
      );
    } else if (i === 0) {
      lines.push(prepareLine(i, lineSpacing, textSize, color, firstLineWidth));
    } else {
      lines.push(
        <View key={i} style={{ marginBottom: lineSpacing }}>
          <Placeholder.Line textSize={textSize} color={color} width={width} />
        </View>,
      );
    }
  }

  return <View>{lines}</View>;
}

Paragraph.propTypes = {
  lineNumber: PropTypes.number.isRequired,
  textSize: PropTypes.number,
  lineSpacing: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  lastLineWidth: PropTypes.string,
  firstLineWidth: PropTypes.string,
};

Paragraph.defaultProps = {
  textSize: 12,
  lineSpacing: 12,
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%',
};

export default Paragraph;
