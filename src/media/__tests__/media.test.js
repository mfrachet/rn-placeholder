import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import Media from './../media';

/** @test {Media#render} */
describe('Media#render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Media
        style={{
          height: 40,
          width: 40,
          backgroundColor: '#efefef',
          borderRadius: 12 / 4,
        }}
      />,
    );
  });

  it('should own a props style that matches the default style', () => {
    const style = {
      height: 40,
      width: 40,
      backgroundColor: '#efefef',
      borderRadius: 12 / 4,
    };
    expect(wrapper.find(View).prop('style')).toEqual(style);
  });
});
