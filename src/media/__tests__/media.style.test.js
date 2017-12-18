import mediaStyle from './../media.style';

/** @test {MediaStyle} */
describe('MediaStyle', () => {
  it('should provide a style object that respects the constraints and parameters', () => {
    const style = {
      height: 80,
      width: 80,
      borderRadius: 40,
      backgroundColor: 'blue',
    };
    expect(mediaStyle({ size: 80, color: 'blue', hasRadius: true })).toEqual(style);
  });

  it('uses the passed in width instead of size if it is defined', () => {
    const style = {
      height: 80,
      width: 100,
      borderRadius: 40,
      backgroundColor: 'blue',
    };
    expect(mediaStyle({ size: 80, width: 100, color: 'blue', hasRadius: true })).toEqual(style);
  });

  it('uses the passed in height instead of size if it is defined', () => {
    const style = {
      height: 100,
      width: 80,
      borderRadius: 50,
      backgroundColor: 'blue',
    };
    expect(mediaStyle({ size: 100, width: 80, color: 'blue', hasRadius: true })).toEqual(style);
  });

  it('uses the passed in borderRadius if one exists', () => {
    const style = {
      height: 100,
      width: 100,
      borderRadius: 10,
      backgroundColor: 'blue',
    };
    expect(mediaStyle({ size: 100, color: 'blue', borderRadius: 10 })).toEqual(style);
  });

  it('can be set to a 0 border radius', () => {
    const style = {
      height: 100,
      width: 100,
      borderRadius: 0,
      backgroundColor: 'blue',
    };
    expect(mediaStyle({ size: 100, color: 'blue', borderRadius: 0 })).toEqual(style);
  });
});
