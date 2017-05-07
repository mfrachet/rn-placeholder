/**
 * Compute style based on props
 * @param size The media size
 * @param hasRadius Does the media rounded or not ?
 * @param color The media color
 */
export default ({ size = 40, hasRadius = false, color = '#efefef' }) => ({
  height: size,
  width: size,
  borderRadius: hasRadius ? size / 2 : 3,
  backgroundColor: color,
});
