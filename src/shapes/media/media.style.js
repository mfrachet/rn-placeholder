export default ({ size = 40, hasRadius = false, color = '#efefef' }) => ({
  height: size,
  width: size,
  borderRadius: hasRadius ? size / 2 : 3,
  backgroundColor: color,
});
