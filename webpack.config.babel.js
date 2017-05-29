import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const nodeEnv = process.env.NODE_ENV

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist', nodeEnv === 'production' ? 'production' : 'development'),
    filename: 'test_sandbox.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    }]
  },
  devtool: nodeEnv === 'production' ? 'source-map' : 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template/template.html'
    }),
    new ExtractTextPlugin('todo.css')
  ]
}
