import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import stylify from '../placeholderStylify';

describe('stylify', () => {
  let computeStyle;
  let Component;

  beforeEach(() => {
    computeStyle = () => ({ backgroundColor: 'red' });
    Component = props => <View {...props} />;
  });

  it('should inject the passed style merged with the computed ones', () => {
    const StyledComponent = stylify(computeStyle)(Component);
    const wrapper = shallow(<StyledComponent style={{ marginLeft: 100 }} />);

    expect(wrapper.find(Component).prop('style')).toEqual({
      marginLeft: 100,
      backgroundColor: 'red',
    });
  });
});
