import HtmlBundlerPlugin from 'html-bundler-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('webpack').Configuration} */
const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /[\\/]images|node_modules[\\/].+(png|jpe?g|webp|ico|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: ({ filename }) => {
            const srcPath = 'src/images';
            const regExp = new RegExp(
              `[\\\\/]?(?:${path.normalize(srcPath)}|node_modules)[\\\\/](.+?)$`,
            );
            const assetPath = path.dirname(
              regExp.exec(filename)[1].replace('@', '').replace(/\\/g, '/'),
            );

            return `images/${assetPath}/[name].[hash:8][ext]`;
          },
        },
      },
      {
        test: /[\\/]fonts|node_modules[\\/].+(woff(2)?|ttf|otf|eot|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: ({ filename }) => {
            const srcPath = 'src/fonts';
            const regExp = new RegExp(
              `[\\\\/]?(?:${path.normalize(srcPath)}|node_modules)[\\\\/](.+?)$`,
            );
            const assetPath = path.dirname(
              regExp.exec(filename)[1].replace('@', '').replace(/\\/g, '/'),
            );

            return `fonts/${assetPath}/[name][ext][query]`;
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@scripts': path.resolve(__dirname, 'src/scripts'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@images': path.resolve(__dirname, 'src/images'),
    },
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: 'src',
      js: {
        filename: 'scripts/[name].[contenthash:8].js',
      },
      css: {
        filename: 'css/[name].[contenthash:8].css',
      },
    }),
  ],
};

export default (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.devServer = {
      static: path.resolve(__dirname, 'dist'),
      watchFiles: {
        paths: ['src/**/*.*'],
        options: {
          usePolling: true,
        },
      },
    };
  }

  return config;
};
