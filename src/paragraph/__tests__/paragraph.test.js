import React from 'react';
import { shallow } from 'enzyme';
import Placeholder from '../../placeholder';
import Paragraph from '../paragraph';

/** @test {Paragraph#render} */
describe('Paragraph#render', () => {
  let wrapper;
  let lineWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Paragraph
        lineNumber={10}
        textSize={14}
        color="green"
        width="80%"
        lineSpacing={10}
        lastLineWidth="40%"
        firstLineWidth="30%"
      />,
    );
    lineWrapper = wrapper.find(Placeholder.Line);
  });

  it('should have 10 Lines, like the linNumber props', () => {
    expect(lineWrapper.length).toEqual(10);
  });

  it('should have the first line with props textSize equals to 14', () => {
    expect(lineWrapper.first().prop('textSize')).toEqual(14);
  });

  it('should have the first line with props color equals to green', () => {
    expect(lineWrapper.first().prop('color')).toEqual('green');
  });

  it('should have the first line with props width equals to 30%', () => {
    expect(lineWrapper.first().prop('width')).toEqual('30%');
  });

  it('should have the second line with props width equals to 80%', () => {
    expect(lineWrapper.at(1).prop('width')).toEqual('80%');
  });

  it('should have the 3 View with props lineSpacing equals to 10', () => {
    expect(
      wrapper
        .find(Placeholder.Line)
        .at(2)
        .prop('style').marginBottom,
    ).toEqual(10);
  });

  it('should have the 10th Line with props width equals to 40%', () => {
    expect(lineWrapper.at(9).prop('width')).toEqual('40%');
  });
});
