module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src/assets/images': './src/assets/images',
          '@src/components': './src/components',
          '@src/constants': './src/constants',
          '@src/navigation': './src/navigation',
          '@src/screens': './src/screens',
          '@src/styles': './src/styles',
          '@src/utils': './src/utils',
        },
      },
    ],
  ],
};
