import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import Placeholder from 'rn-placeholder';

const customPlaceholder = (props) => {
  const style = { backgroundColor: props.bgColor };
  return <Text style={style}>I m a custom loader with props bgColor = {props.bgColor}</Text>;
};

customPlaceholder.propTypes = {
  bgColor: PropTypes.string,
};

customPlaceholder.defaultProps = {
  bgColor: '',
};

export default Placeholder.connect(customPlaceholder);
