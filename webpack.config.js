const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'tsneko.js',
    path: path.resolve(__dirname, '_bundle'),
    library: 'tsneko',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
