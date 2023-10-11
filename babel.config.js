module.exports = function(api) {
  plugins: ['babel-plugin-styled-components'],
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
