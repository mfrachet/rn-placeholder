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
    expect(mediaStyle({ size: 80, color: 'blue', width: '100%', hasRadius: true })).toEqual(style);
  });
});
