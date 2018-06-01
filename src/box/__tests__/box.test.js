import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import Box from './../box';

describe('Box#render', () => {
  let wrapper;

  const getWrapper = props => shallow(<Box {...props} />);

  it('should own a props style that matches the default style', () => {
    const style = {
      height: 50,
      width: 50,
      borderRadius: 0,
      backgroundColor: '#efefef',
    };

    wrapper = getWrapper({
      style,
    });

    expect(wrapper.find(View).prop('style')).toEqual(style);
  });
});
