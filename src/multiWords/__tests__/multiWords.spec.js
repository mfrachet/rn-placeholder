import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import MultiWords from '../multiWords';
import Placeholder from '../../placeholder';

const TEXT_SIZE = 12;
const words = [
  {
    width: '20%',
    color: 'red',
  },
  {
    width: '10%',
    color: 'blue',
  },
  {
    width: '30%',
    color: 'green',
  },
];

/** @test {MultiWords#render} */
describe('MultiWords#render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MultiWords words={words} textSize={TEXT_SIZE} />);
  });

  it('shouldnt have any line', () => {
    wrapper = shallow(<MultiWords />);
    expect(wrapper.find(Placeholder.Line).length).toEqual(0);
  });

  it('should have 3 lines', () => {
    expect(wrapper.find(Placeholder.Line).length).toEqual(3);
  });

  words.forEach((word, index) => {
    it(`should have the ${index} word with props textSize equals to ${TEXT_SIZE}`, () => {
      expect(
        wrapper
          .find(Placeholder.Line)
          .at(index)
          .prop('textSize'),
      ).toEqual(TEXT_SIZE);
    });

    it(`should have the ${index} word with props colors equals to ${word.color}`, () => {
      expect(
        wrapper
          .find(Placeholder.Line)
          .at(index)
          .prop('color'),
      ).toEqual(word.color);
    });

    it(`should have the ${index + 1} View with props style.width equals to ${word.width}`, () => {
      expect(
        wrapper
          .find(View)
          .at(index + 1)
          .prop('style')[1].width,
      ).toEqual(word.width);
    });

    it(`should have the ${index + 1} View with props style to have a special border style`, () => {
      const realIndex = index + 1;
      const view = wrapper.find(View).at(realIndex);
      const lastIndex = words.length;
      const result = lastIndex === realIndex
        ? false
        : {
          borderRightWidth: 12,
          borderRightColor: 'transparent',
        };
      expect(view.prop('style')[0]).toEqual(result);
    });
  });
});
