# Contributing Guide

<p align="center"><img alt="Captain America sitting on a backwards chair" src="https://res.cloudinary.com/cloudfour/image/upload/c_scale,f_auto,q_auto,w_800/v1580506044/america_obfr70.jpg" width="400" /></p>

So you want to contribute to MLTSHP… Congratulations! Here's what you'll need to know.

## Getting Started

We use the "[fork and pull](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)" model, which means you'll need to start by [forking our repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository), then make some changes, and then [submit a pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) back to the main repo.

1. Fork [this repo](https://github.com/MLTSHP/mltshp-patterns/).
1. Run `npm ci` to install dependencies.
1. Run `npm run storybook` to start a local instance of Storybook, our preview site.

Any changes you make should automatically be reflected in the preview site.

## About

The output of this project is CSS patterns and components. We generate that CSS using Sass and PostCSS.

The CSS depends on JSON tokens, which are converted into CSS custom properties and Sass variables using a tool called [Style Dictionary](https://amzn.github.io/style-dictionary/).

And finally, we use [Storybook](https://storybook.js.org/) to preview, test, and develop our CSS components in isolation without worrying about app specific dependencies and requirements.

#### What PostCSS Plugins do We Use?

Our PostCSS setup is minimal. We're running [postcss-inline-svg](https://www.npmjs.com/package/postcss-inline-svg) to convert SVGs in the CSS into inline code, and we're running [cssnano](https://cssnano.co/) to minify the final output.

#### How do Design Tokens Work?

[Design tokens](https://amzn.github.io/style-dictionary/#/tokens) are stored in JSON files in the `src/tokens/` directory. The build process will automatically translate the tokens to the formats we're consuming, such as CSS custom properties.

#### How do Storybook Stories Work?

Need help with how Storybook works? Check out the [Storybook Docs](https://storybook.js.org/docs/react/get-started/why-storybook).

#### Linting

We run Stylelint against Sass files, ESLint against JS files, and Prettier against all files. Linting will be run automatically against any pull requests.

## Submitting a Pull Request

You'll want to [create a pull request from a fork of this repo](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). Once you do, we'll review your code, suggest changes, and eventually merge them! Then your changes will be available for anyone using the package, including the main MLTSHP site!

## Publishing

Only admins need to worry about these step.

### to npm

1. `git checkout main`
1. `git pull`
1. Make sure you have a clean working tree (`git status` should show no changes)
1. `npm ci`
1. `npm run lint:check`
1. Update `CHANGELOG.md` with a summary of your changes
1. `npm version`
1. `npm publish` - This will automatically install and compile everything, run linting, and publish
1. `git push && git push --tags`

### to MLTSHP.com

1. `npm run build`
1. Copy the minified CSS files from the `dist` folder to the `static/css` folder in the MLTSHP repo.
1. Open a new PR for the updated CSS files.
