import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from '../placeholder';

const prepareLine = (i, marginBottom, textSize, color, width) => (
  <Placeholder.Line
    textSize={textSize}
    color={color}
    width={width}
    key={i}
    style={{ marginBottom }}
  />
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
        <Placeholder.Line textSize={textSize} color={color} width={lastLineWidth} key={i} />,
      );
    } else if (i === 0) {
      lines.push(prepareLine(i, lineSpacing, textSize, color, firstLineWidth));
    } else {
      lines.push(
        <Placeholder.Line
          textSize={textSize}
          color={color}
          width={width}
          key={i}
          style={{ marginBottom: lineSpacing }}
        />,
      );
    }
  }

  return <React.Fragment>{lines}</React.Fragment>;
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
