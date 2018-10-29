import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Line } from '../components';

const prepareLine = (i, marginBottom, textSize, color, width) => (
  <Line textSize={textSize} color={color} width={width} key={i} style={{ marginBottom }} />
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
  style,
}) {
  const lineRealNumber = lineNumber - 1;

  const lines = Array(lineNumber)
    .fill(null)
    .map((_, i) => {
      if (i === lineRealNumber) {
        return <Line textSize={textSize} color={color} width={lastLineWidth} key={i} />;
      }

      if (i === 0) {
        return prepareLine(i, lineSpacing, textSize, color, firstLineWidth);
      }

      return (
        <Line
          textSize={textSize}
          color={color}
          width={width}
          key={i}
          style={{ marginBottom: lineSpacing }}
        />
      );
    });

  return <View style={style}>{lines}</View>;
}

Paragraph.propTypes = {
  lineNumber: PropTypes.number.isRequired,
  textSize: PropTypes.number,
  lineSpacing: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  lastLineWidth: PropTypes.string,
  firstLineWidth: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]),
};

Paragraph.defaultProps = {
  textSize: 12,
  lineSpacing: 12,
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%',
  style: {},
};

export default Paragraph;
