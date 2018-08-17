import React from 'react';
import { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import connect from '../placeholderContainer';

describe('connect', () => {
  const getWrapper = (props = {}) => {
    const Component = connect(View);

    return shallow(<Component {...props} />);
  };

  it('should create a connected component', () => {
    const wrapper = getWrapper({ animate: 'fade', onReady: false });

    expect(wrapper.find(View)).toBeTruthy();
  });

  it('should return the children if ready', () => {
    const wrapper = getWrapper({
      animate: 'fade',
      onReady: true,
      children: <Text>Hello world</Text>,
    });

    const node = wrapper.find(Text);

    expect(node.length).toBe(1);
  });

  it('should display the component passed as customAnimate prop', () => {
    const CustomAnimate = () => <View />;

    const wrapper = getWrapper({
      onReady: false,
      customAnimate: CustomAnimate,
    });

    expect(wrapper.find(CustomAnimate).length).toBe(1);
  });

  it('should display the corresponding animation when prop animate is fade', () => {
    const wrapper = getWrapper({
      onReady: false,
      animate: 'fade',
    });

    expect(wrapper.find('Fade').length).toBe(1);
  });

  it('should  throw an error if the animate prop doesnt exist in the Animations dictionnary', () => {
    expect(() => getWrapper({
      onReady: false,
      animate: 'not-existing-one',
    })).toThrow();
  });

  it('should return a default component with specified props when no animations set', () => {
    const wrapper = getWrapper({
      onReady: false,
      customAnimate: null,
      animate: null,
    });

    expect(wrapper.props()).toEqual({});
  });
});
