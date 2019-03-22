import React from 'react';
import PropTypes from 'prop-types';
import Pl from '../placeholderContainer';
import Placeholder from '../placeholder/placeholder';

function Paragraph({
  lineNumber,
  textSize,
  color,
  width,
  lastLineWidth,
  firstLineWidth,
  ...props
}) {
  const lines = [];

  for (let i = 0; i < lineNumber; i++) {
    if (i === 0) {
      lines.push(<Pl.Line textSize={textSize} color={color} width={firstLineWidth} />);
    } else if (i === lineNumber - 1) {
      lines.push(<Pl.Line textSize={textSize} color={color} width={lastLineWidth} />);
    } else {
      lines.push(<Pl.Line textSize={textSize} color={color} width={width} />);
    }
  }
  return <Placeholder {...props}>{lines}</Placeholder>;
}

Paragraph.propTypes = {
  lineNumber: PropTypes.number.isRequired,
  textSize: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  lastLineWidth: PropTypes.string,
  firstLineWidth: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]),
};

Paragraph.defaultProps = {
  textSize: 12,
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%',
  style: {},
};

export default Paragraph;
