import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from '../paragraph/paragraph';
import { Media } from '../shapes';

export class ImageContent extends React.Component {
  constructor(props) {
    super(props);

    this.renderLeft = this.renderLeft.bind(this);
    this.renderRight = this.renderRight.bind(this);
  }

  renderLeft() {
    const { color, position, hasRadius, size } = this.props;

    return position === 'left' ? <Media hasRadius={hasRadius} color={color} size={size} /> : null;
  }

  renderRight() {
    const { color, position, hasRadius, size } = this.props;

    return position === 'right' ? <Media hasRadius={hasRadius} color={color} size={size} /> : null;
  }

  render() {
    const {
      position,
      size,
      hasRadius,
      lineNumber,
      textSize,
      color,
      width,
      lastLineWidth,
      firstLineWidth,
      ...props
    } = this.props;

    return (
      <Paragraph
        {...props}
        lineNumber={lineNumber}
        textSize={textSize}
        color={color}
        width={width}
        lastLineWidth={lastLineWidth}
        firstLineWidth={firstLineWidth}
        renderLeft={this.renderLeft}
        renderRight={this.renderRight}
      />
    );
  }
}

ImageContent.propTypes = {
  position: PropTypes.string,
  size: PropTypes.number,
  hasRadius: PropTypes.bool,
  animation: PropTypes.string,
  lineNumber: PropTypes.number.isRequired,
  textSize: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  lastLineWidth: PropTypes.string,
  firstLineWidth: PropTypes.string,
};

ImageContent.defaultProps = {
  position: 'left',
  size: 40,
  hasRadius: false,
  animation: null,
  textSize: 12,
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%',
};
