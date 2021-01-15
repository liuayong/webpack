const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    // publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },

      // npm i url-loader@^1.1.2 -D
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 12 * 1024,
              name: 'img/[name]-url.[hash:8].[ext]'
            }
          },
        ]
      },

      // //  "file-loader": "^3.0.1",
      // {
      //   test:/\.(png|jpg|jpeg|gif)$/,
      //   use:[
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'img/[name]-file.[hash:3].[ext]'
      //       }
      //     },
      //   ]
      // },


      //  es6语法处理
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },

      //   npm i vue-loader@^13.0.0 vue-template-compiler@^2.5.21 -D
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "use html-webpack-plugin"
    }),
    new UglifyjsWebpackPlugin(),
    new webpack.BannerPlugin("\n最终版权归liuayong所有\n"),

  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: './dist',

  }

}