const path = require('path'); //절대경로를 참조하기 위해 path를 불러오기

const HtmlWebpackPlugin = require('html-webpack-plugin'); //웹팩에서 HTML을 다루기위한 플로그인을 불러오기

// Typescript(타입스크립트)를 빌드할 때 성능을 향상시키기 위한 플러그인를 불러오기
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  // 번들 파일로 만들기 위한 시작 파일(entry)을 설정
  //생성될 번들 파일은 js 폴더 하위에 app.js라는 이름으로 생성
  //이 파일은 ./src/index.tsx를 시작으로 번들링(하나로 합치기)합니다.
  entry: {
    'js/app': ['./src/index.tsx']
  },

  //생성된 번들 파일(bundle)은 ./build/ 폴더에 생성
  //publicPath를 지정함으로써 HTML등 다른 파일에서 생성된 번들을 참조할 때, /을 기준으로 참조
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/'
  },

  //React(리액트) 파일인 jsx와 js는 babel(바벨)을 이용하여 빌드
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|PNG|jpg|gif|ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },

  //./src/index.html 파일을 build 경로에 index.html로 파일을 생성
  //파일을 생성할 때, Webpack(웹팩)이 만든 번들 파일(/js/app.js)를 HTML에 추가하여 생성
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/favicon.ico'
    }),
    new ForkTsCheckerWebpackPlugin()
  ],

  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true
  },

  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
    alias: {
      src: path.resolve(__dirname, './src'),
      pages: path.resolve(__dirname, './src/pages'),
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets')
    }
  }
};
