/**
 * Compute style based on props
 * @param textSize The line text size
 * @param color The line color
 * @param width The line width
 */
export default ({ textSize, color, width }) => ({
  height: textSize,
  width,
  alignSelf: 'stretch',
  backgroundColor: color,
  borderRadius: textSize / 4,
});
