/**
 * Compute style based on props
 * @param size The media size
 * @param hasRadius Does the media rounded or not ?
 * @param color The media color
 */
export default ({
  size = 40,
  hasRadius = false,
  color = '#efefef',
  width,
  height,
  borderRadius,
}) => {
  const defaultRadius = hasRadius ? size / 2 : 3;
  return {
    height: height || size,
    width: width || size,
    borderRadius: typeof borderRadius === 'number' ? borderRadius : defaultRadius,
    backgroundColor: color,
  };
};
