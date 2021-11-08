# Contributing Guide

<p align="center"><img alt="Captain America sitting on a backwards chair" src="https://res.cloudinary.com/cloudfour/image/upload/c_scale,f_auto,q_auto,w_800/v1580506044/america_obfr70.jpg" width="400" /></p>

So you want to contribute to MLTSHP… Congratulations! Here's what you'll need to know.

## Getting Started

1. Clone this repo to a new directory.
1. Run `yarn` to install dependencies.
1. Run `yarn storybook` to start a local instance of Storybook, our preview site.

Any changes you make should automatically be reflected in the preview site.

## About

This project uses Style Dictionary for design tokens, and Storybook to preview the components.

### About Style Dictionary

[Style Dictionary](https://amzn.github.io/style-dictionary/) is a build system that allows you to define styles once, in a way for any platform or language to consume. A single place to create and edit your styles, and a single command exports these rules to all the places you need them - iOS, Android, CSS, JS, HTML, sketch files, style documentation, or anything you can think of.

#### Design Tokens

Design tokens are stored in JSON files in the `src/tokens/` directory. The build process will automatically translate the tokens to the formats we're consuming, such as CSS custom properties.

### About Storybook

[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation for web components. It makes building stunning UIs organized and efficient. With it, you can visualize different states of your UI components and develop them interactively.

We're using Storybook as a means to preview, test, and develop UI components in isolation without worrying about app specific dependencies and requirements.

#### How do Storybook Stories Work?

Need help with how Storybook docs work? Check out the [Storybook Docs guide](https://storybook.js.org/docs/react/writing-docs/mdx).

## Linting

We run Stylelint against Sass files, Remark against Markdown files, and ESLint against JS files.

```bash
yarn lint:check
```

Linting will be run automatically against any pull requests.

## Submitting a Pull Request

You'll want to [create a pull request from a fork of this repo](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). Once you do, we'll review your code, suggest changes, and eventually merge them! Then your changes will be available for anyone using the package, including the main MLTSHP site!

## Publishing

Only admins need to worry about these step.

### to npm

1. `git checkout main`
1. `git pull`
1. Make sure you have a clean working tree (`git status` should show no changes)
1. `yarn install --frozen-lockfile`
1. `yarn lint:check`
1. `npm version`
1. `npm publish` - This will automatically install and compile everything, run linting, and publish
1. `git push && git push --tags`

## to MLTSHP.com

1. `yarn build`
1. Copy the minified CSS files from the `dist` folder to the `static/css` folder in the MLTSHP repo.
1. Open a new PR for the updated CSS files.
