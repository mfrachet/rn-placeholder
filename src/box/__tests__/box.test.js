import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import Box from './../box';

describe('Box#render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Box />);
  });

  it('should own a props style that matches the default style', () => {
    const style = {
      height: 40,
      width: 50,
      borderRadius: 0,
      backgroundColor: '#efefef',
    };
    expect(wrapper.find(View).prop('style')).toEqual(style);
  });

  it('should own a props style that matches the props', () => {
    wrapper = shallow(<Box height={50} width={20} color="red" borderRadius={5} />);
    const style = {
      height: 50,
      width: 20,
      backgroundColor: 'red',
      borderRadius: 5,
    };
    expect(wrapper.find(View).prop('style')).toEqual(style);
  });
});
