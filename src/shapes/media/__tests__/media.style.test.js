import mediaStyle from '../media.style';

/** @test {MediaStyle} */
describe('MediaStyle', () => {
  it('should provide a style object that respects the constraints and parameters', () => {
    const style = {
      height: 80,
      width: 80,
      borderRadius: 40,
      backgroundColor: 'blue',
    };
    expect(mediaStyle({
      size: 80, color: 'blue', width: '100%', hasRadius: true,
    })).toEqual(style);
  });

  it('should provide a style object that respects the constraints and parameters', () => {
    const style = {
      height: 80,
      width: 80,
      borderRadius: 3,
      backgroundColor: 'blue',
    };
    expect(mediaStyle({ size: 80, color: 'blue', width: '100%' })).toEqual(style);
  });

  it('should provide a style object that respects the constraints and parameters with default params', () => {
    const style = {
      height: 80,
      width: 80,
      borderRadius: 3,
      backgroundColor: '#efefef',
    };
    expect(mediaStyle({ size: 80, width: '100%' })).toEqual(style);
  });

  it('should provide a style object that respects the constraints and parameters with default params', () => {
    const style = {
      borderRadius: 3,
      backgroundColor: '#efefef',
      height: 40,
      width: 40,
    };
    expect(mediaStyle({})).toEqual(style);
  });
});
