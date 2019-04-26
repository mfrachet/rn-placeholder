import computeStyleBox from '../box.style';

describe('computeStyleBox', () => {
  it('should have retrieved the default styles', () => {
    const defaultStyles = computeStyleBox({});
    expect(defaultStyles).toEqual({
      height: 50,
      width: 50,
      borderRadius: 0,
      backgroundColor: '#efefef',
    });
  });

  it('should have retrieved the computed styles', () => {
    const styles = computeStyleBox({
      height: 1000, width: 1000, radius: 10, color: 'blue',
    });
    expect(styles).toEqual({
      height: 1000,
      width: 1000,
      borderRadius: 10,
      backgroundColor: 'blue',
    });
  });
});
