const  path = require('path');

module.exports = {
  entry :'./src/main.js',
  output: {
    path : path.resolve(__dirname, "dist"),
    filename : "[name].bundle.[chunkhash:8].js"
  }

}