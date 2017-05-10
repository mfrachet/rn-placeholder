import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import ImageContent from './../imageContent';
import Media from './../../media/media';
import Paragraph from './../../paragraph/paragraph';

/** @test {ImageContent#render} */
describe('ImageContent#render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ImageContent
      position="left"
      size={50}
      hasRadius
      animate="fade"
      lineNumber={8}
      textSize={13}
      lineSpacing={10}
      color="#ff0000"
      width="99%"
      lastLineWidth="50%"
      firstLineWidth="30%"
    />);
  });

  it('should have a Media', () => {
    expect(wrapper.find(Media).length).toEqual(1);
  });

  it('should have a Media with props color equals to #ff0000', () => {
    expect(wrapper.find(Media).prop('color')).toEqual('#ff0000');
  });

  it('should have a Media with props size equals to 50', () => {
    expect(wrapper.find(Media).prop('size')).toEqual(50);
  });

  it('should have a Media with props hasRadius equals to true', () => {
    expect(wrapper.find(Media).prop('hasRadius')).toEqual(true);
  });

  it('should have a Paragraph', () => {
    expect(wrapper.find(Paragraph).length).toEqual(1);
  });

  it('should have a Paragraph with props animate equals to "fade"', () => {
    expect(wrapper.find(Paragraph).prop('animate')).toEqual('fade');
  });

  it('should have a Paragraph with props lineNumber equals to 8', () => {
    expect(wrapper.find(Paragraph).prop('lineNumber')).toEqual(8);
  });

  it('should have a Paragraph with props textSize equals to 13', () => {
    expect(wrapper.find(Paragraph).prop('textSize')).toEqual(13);
  });

  it('should have a Paragraph with props color equals to #ff0000', () => {
    expect(wrapper.find(Paragraph).prop('color')).toEqual('#ff0000');
  });

  it('should have a Paragraph with props width equals to 99%', () => {
    expect(wrapper.find(Paragraph).prop('width')).toEqual('99%');
  });

  it('should have a Paragraph with props lastLineWidth equals to 50%', () => {
    expect(wrapper.find(Paragraph).prop('lastLineWidth')).toEqual('50%');
  });

  it('should have a Paragraph with props firstLineWidth equals to 30%', () => {
    expect(wrapper.find(Paragraph).prop('firstLineWidth')).toEqual('30%');
  });

  it('should have a Paragraph with props lineSpacing equals to 10', () => {
    expect(wrapper.find(Paragraph).prop('lineSpacing')).toEqual(10);
  });

  it('should have the second View (corresponding to the Media) with props style equals with the concerned on', () => {
    const style = {
      marginRight: 13, flexDirection: 'column', justifyContent: 'center',
    };
    expect(wrapper.find(View).at(1).prop('style')).toEqual(style);
  });

  it('should have the third View (corresponding to the Media) with props style equals with the concerned on', () => {
    wrapper = shallow(<ImageContent
      position="right"
      size="50"
      hasRadius
      animate="fade"
      lineNumber={8}
      textSize={13}
      lineSpacing={10}
      color="#ff0000"
      width="99%"
      lastLineWidth="50%"
      firstLineWidth="30%"
    />);
    const style = {
      marginLeft: 13, flexDirection: 'column', justifyContent: 'center',
    };
    expect(wrapper.find(View).at(2).prop('style')).toEqual(style);
  });
});
