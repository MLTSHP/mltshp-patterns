# Contributing Guide

<div align="center">

<img alt="Metal dude throwing horns" src="https://mltshp-cdn.com/static/images/invitation-dude.svg" width="400" />

So you want to contribute to MLTSHP… Congratulations! Here's what you'll need to know.

</div>

## Getting Started

We use the "[fork and pull](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)" model, which means you'll need to start by [forking our repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository), then make some changes, and then [submit a pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) back to the main repo.

1. Fork [this repo](https://github.com/MLTSHP/mltshp-patterns/).
1. Run `npm ci` to install dependencies.
1. Run `npm start` to start a local instance of our preview site.

Any changes you make should automatically be reflected in the preview site.

To test your changes in a your [local mltshp development ennvironment](https://github.com/MLTSHP/mltshp?tab=readme-ov-file#development-environment), run `npm run build` in mltshp-patterns and copy the resultant CSS files from `dist` to the `static/css` folder in your DE.

## About

The output of this project is CSS patterns and components. We generate that CSS using Sass and PostCSS.

#### What PostCSS Plugins do We Use?

Our PostCSS setup is minimal. We're running [postcss-inline-svg](https://www.npmjs.com/package/postcss-inline-svg) to convert SVGs in the CSS into inline code, and we're running [cssnano](https://cssnano.co/) to minify the final output.

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
1. Update `CHANGELOG.md` with a summary of your changes
1. `npm version [major | minor | patch]`
1. `npm publish` - This will automatically install and compile everything, run linting, and publish
1. `git push && git push --tags`

### to MLTSHP.com

1. `npm run build`
1. Copy the minified CSS files from the `dist` folder to the `static/css` folder in the MLTSHP repo.
1. Open a new PR for the updated CSS files.
