module.exports = (api) => {
  const preset = api.env('test')
    ? 'module:metro-react-native-babel-preset'
    : ['@babel/preset-env', { modules: false }];

  return { presets: ['@babel/preset-react', preset] };
};
