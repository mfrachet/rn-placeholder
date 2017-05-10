/**
 * Compute style based on props
 * @param textSize The line text size
 * @param color The line color
 * @param width The line width
 */
export default ({ textSize = 12, color = '#efefef', width = '100%' }) => ({
  height: textSize,
  width,
  alignSelf: 'stretch',
  backgroundColor: color,
  borderRadius: textSize / 4,
});
