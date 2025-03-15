# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Removed Storybook, replaced with a simpler homebrew Eleventy site for
  documentation. (#1337)
  - Breaking change: Removed "components", "areas", and "layouts" from the
    "legacy" group. This was intended for a redesign that never came, and
    is no longer helpful. For users who directly consume `main.css`, there
    will be no impact, but if you were including the Sass partials directly,
    you may need to update your code.

## [3.0.0] - 2025-02-28

- Compact Peekaboo Header (#1331)
  - Breaking change: You'll need to change `site-branding--icon` from a `<span>`
    element to a `<div>` element.
- Bugfix: Shake Invite Form Stacking (#1326)
- Bugfix: Shake Invite Form Dark Mode (#1325)
- Bugfix: Firefox Shake Invite Button Layout (#1323)
- Bugfix: Adjusting z-index for site header (#1321)

## [2.8.0] - 2025-02-27

- Limit vertical height of shake menu
- Peek-a-boo header strip

## [2.7.0] - 2025-01-25

- Shake Layout for Content (#1301)

## [2.6.0] - 2024-12-29

- Permalink Layout for Content (#1279)
- Picker alt text (#1039)

## [2.5.0] - 2023-07-01

- Make Alt Text Distinct from Description (#1027)

## [2.4.0] - 2023-06-30

- Alt text (#1024)

## [2.3.0] - 2023-04-16

- Make user-nav more tap-friendly (#977)

## [2.2.0] - 2020-10-23

- Add new flag illustration to assets
- Fix Line Height and Color Regressions (#271)
- Better Focus State for Logo

## [2.1.0] - 2020-10-14

- Fix two spots where images weren't resizing right
- Apply Light Mode custom props in :root
- Fix even more image sizes to solve for oddly sized avatars

## [2.0.1] - 2020-10-13

- Apply Dark Theme colors to Dark Theme selector
- Improved choose shake link styles
- Better dark mode colors for buttons and choose shake
- Improved focus styles
- Updated tool icons

## [2.0.0] - 2020-09-29

- Initial release
- There was no v1 in this repo or package, because that was the MLKSHK styles.
