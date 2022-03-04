import { resolve as _resolve } from 'path'; // 절대경로를 참조하기 위해 path를 불러오기

import HtmlWebpackPlugin from 'html-webpack-plugin'; // 웹팩에서 HTML을 다루기위한 플로그인을 불러오기

// Typescript(타입스크립트)를 빌드할 때 성능을 향상시키기 위한 플러그인를 불러오기
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const entry = {
  'js/app': ['./src/index.tsx']
};

export const output = {
  path: _resolve(__dirname, 'build/'),
  publicPath: '/'
};

export const module = {
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
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader']
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
};

export const plugins = [
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    filename: 'index.html',
    favicon: 'public/favicon.ico'
  }),
  new ForkTsCheckerWebpackPlugin()
];

export const devtool = 'inline-source-map';
export const devServer = {
  host: 'localhost',
  port: 3007,
  open: true,
  historyApiFallback: true
};

export const resolve = {
  modules: [_resolve(__dirname, './src'), 'node_modules'],
  extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
  alias: {
    src: _resolve(__dirname, './src'),
    pages: _resolve(__dirname, './src/pages'),
    components: _resolve(__dirname, './src/components'),
    assets: _resolve(__dirname, './src/assets')
  }
};
