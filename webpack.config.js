const path = require('path');

module.exports = {
  entry: './src/report_table.js',
  output: {
    filename: 'bundle.js',
    path: path.join(path.resolve(__dirname), '/dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,  // Para todos os arquivos .js
        exclude: /node_modules/,  // Ignora a pasta node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // Compila ES6 para ES5
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        loader: 'url-loader',
      },
    ],
  },
  mode: 'production'  // Modo de produção para otimização
};
