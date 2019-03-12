module.exports = (api) => {
  const presets = ['@babel/preset-react'];
  if (api.env('test')) {
    presets.push('module:metro-react-native-babel-preset');
  } else {
    presets.push(['@babel/preset-env', { modules: false }]);
  }
  return { presets };
};
