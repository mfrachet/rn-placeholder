import lineStyle from '../line.style';

/** @test {LineStyle} */
describe('LineStyle', () => {
  it('should provide a style object that corresponds to the default one', () => {
    const style = {
      height: 12,
      width: '100%',
      alignSelf: 'stretch',
      backgroundColor: '#efefef',
      borderRadius: 12 / 4,
    };
    expect(lineStyle({})).toEqual(style);
  });

  it('should provide a style object that respects the constraints and parameters', () => {
    const style = {
      height: 12,
      width: '100%',
      alignSelf: 'stretch',
      backgroundColor: '#efefef',
      borderRadius: 12 / 4,
    };
    expect(lineStyle({ textSize: 12, color: '#efefef', width: '100%' })).toEqual(style);
  });
});
