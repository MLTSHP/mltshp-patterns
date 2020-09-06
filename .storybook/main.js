const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: ['../src/welcome.stories.mdx', '../src/**/*.stories.@(js|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      }
    },
    '@storybook/addon-a11y',
    'storybook-addon-themes',
  ],
  webpackFinal: async (config) => {
    const isDev = config.mode === 'development';
    // Remove default SVG processing from default config.
    // @see https://github.com/storybookjs/storybook/issues/5708#issuecomment-515384927
    config.module.rules = config.module.rules.map((data) => {
      if (/svg\|/.test(String(data.test))) {
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
      }
      return data;
    });

    /**
     * For development, leave the default 'cheap-module-source-map', as it's faster and works.
     * For the build, using the default does not work correctly, but this option appears to.
     * @see https://webpack.js.org/configuration/devtool/
     */
    if (!isDev) {
      config.devtool = 'source-map';
    }

    // Push new rules
    config.module.rules.push(
      {
        test: /\.s[ca]ss$/,
        use: [
          {
            // @see https://github.com/webpack-contrib/style-loader/issues/303#issuecomment-581168870
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              // Lets CSS loader know there are two loaders left that may be
              // handling imports.
              // @see https://github.com/webpack-contrib/css-loader#importloaders
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // Dart Sass performs much better than Node Sass
              implementation: require('sass'),
              sourceMap: true,
              sassOptions: {
                importer: [
                  require('../glob-sass-importer'),
                  // Import Theo design tokens as SCSS variables
                  require('../.theo/sass-importer'),
                ],
              },
            },
          },
        ],
      },
      {
        // Optimize and process SVGs as React elements for use in documentation
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
      {
        // Import Theo design tokens as JS objects
        test: /\.ya?ml$/,
        use: resolve(__dirname, '../.theo/webpack-loader.js'),
      }
    );

    config.plugins.push(new MiniCssExtractPlugin());

    return config;
  },
};
