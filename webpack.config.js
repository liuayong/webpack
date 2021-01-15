const  path = require('path');

module.exports = {
  entry :'./src/main.js',
  output: {
    path : path.resolve(__dirname, "dist"),
    filename : "[name].bundle.js",
    publicPath: 'dist/',
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },

      // npm i url-loader@^1.1.2 -D
      {
        test:/\.(png|jpg|jpeg|gif)$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 12*1024,
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
      }
    ]
  }

}