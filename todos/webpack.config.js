const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'sass-loader',
        ],
        type:'asset/resource',
        generator:{
          filename: '[name].css', 
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
	generator:{filename: './assets/fonts/[name][ext]'},
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/images/[name][ext]'
        }
      }
    ]
  }
};

module.exports = config;
