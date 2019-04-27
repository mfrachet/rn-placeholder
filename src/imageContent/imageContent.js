import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "../paragraph/paragraph";
import { Media } from "../shapes";

export const ImageContent = ({
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
}) => {
  const LeftComponent = () =>
    position === "left" ? <Media hasRadius={hasRadius} /> : null;
  const RightComponent = () =>
    position === "right" ? <Media hasRadius={hasRadius} /> : null;

  return (
    <Paragraph
      {...props}
      lineNumber={lineNumber}
      textSize={textSize}
      color={color}
      width={width}
      lastLineWidth={lastLineWidth}
      firstLineWidth={firstLineWidth}
      renderLeft={LeftComponent}
      renderRight={RightComponent}
    />
  );
};

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
  firstLineWidth: PropTypes.string
};

ImageContent.defaultProps = {
  position: "left",
  size: 40,
  hasRadius: false,
  animation: null,
  textSize: 12,
  color: "#efefef",
  width: "100%",
  lastLineWidth: "100%",
  firstLineWidth: "100%"
};
