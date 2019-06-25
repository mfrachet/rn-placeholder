import React from 'react';
import renderer from 'react-test-renderer';
import { Line } from '../line';

describe('Line', () => {
  let props;

  const getWrapper = () => renderer.create(<Line {...props} />);

  beforeEach(() => {
    props = {};
  });

  it('should match snapshot', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('should match snapshot with a bit more props and style', () => {
    props.style = { marginTop: 1000 };
    props.testID = '123';
    props.noMargin = true;

    expect(getWrapper()).toMatchSnapshot();
  });
});
