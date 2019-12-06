
// const path = require('path')

// module.exports = {
//   mode: 'development',
//   entry: './src/app.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, 'public/dist')
//     // path: path.join(__dirname, 'public/js')
//   },
//   module: {
//     rules: [{
//       loader: 'babel-loader',
//       test: /\.js$/,
//       exclude: /node_modules/
//       }, {
//         test: /\.s?css$/, // SUPPORTS: scss & css (? = optional)
//         use: [            // use: [Array of 'loaders']
//           'style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       }]
//     },
//     devServer: {
//       contentBase: path.join(__dirname, 'public'),
//       publicPath: '/dist/'
//       // publicPath: '/js/'
//     },
//     devtool: 'cheap-module-eval-source-map'   // For Development
// };



const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {
  // const isProduction = env === 'production';
  // console.log('env', env)

  return {
    mode: 'development',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
        }, {
          test: /\.s?css$/, // SUPPORTS: scss & css (? = optional)
          use: [            // use: [Array of 'loaders']
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: (resourcePath, context) => {
                        return path.relative(path.dirname(resourcePath), context) + '/';
                    }
                }
              },
            'css-loader',
            'sass-loader'
            // 'style-loader'   // Don't Need
          ]
        }]
      },
      plugins: [
          new MiniCssExtractPlugin({
            filename: 'styles.css'
          }),
      ],
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/dist/'
      },
      devtool: 'cheap-module-eval-source-map'
      // devtool: 'source-map'   // Chose source-map
      // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map'   // Chose source-map
    };
};
