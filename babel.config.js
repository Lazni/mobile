module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@api': './src/api',
            '@contexts': './src/contexts',
            '@components': './src/components',
            '@constants': './src/constants',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@store': './src/store',
            '@types': './src/types',
            '@theme': './src/theme',
            '@validation': './src/validation',
            '@gifs': './src/assets/gifs',
            '@pngs': './src/assets/pngs',
            '@svgs': './src/assets/svgs',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
