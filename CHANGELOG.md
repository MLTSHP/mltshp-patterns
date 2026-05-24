# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Visual changes

- Move Older and Newer buttons on small screens to align their outer edges with the outer edges of the content above. Brings into line with larger screen sizes
- Always horizontally align like + save buttons with the stats tabs. Currently if there is an originally posted by the like + save buttons are aligned with that instead. Improves layout consistency and simplifies markup
- On posts that the user can edit the alt text is shown by default (the user doesn't have to toggle it visible). This simplifies the markup, styles, and javascript, and also helps to highlight to post authors if they have no alt text defined yet
- Moved the "remove from shake" button to be within the post header (used to be in the right hand gutter beside the header). Simpler markup and looks better
- Right aligned some buttons in the conversations view. Allows for a less cluttered layout without wasting heaps of vertical space

### Use semantic tags on the outermost layers of most pages e.g.

- `<div class="content">` -> `<main class="content">`
- `<div class="header">` -> `<header class="page-header">`
- `<div class="sidebar">` -> `<aside class="sidebar">`

### Restructure image list container

Instead of flat pairs of alternating divs making up each shared image, all wrapped in a normal
div ...

```html
<div class="image-content-list">
	<div class="image-title" />
	<div class="image-content" />
	<div class="image-title" />
	<div class="image-content" />
	...
</div>
```

... wrap each image (post) in a top level article to encapsulate it as a self
contained piece of content, and then wrap those is a properly constructed
unordered list.

```html
<ul class="image-content-list">
  <li>
    <article class="post" />
      <header class="post__title" />
      <div class="post__content" />
      <div class="post__footer" />
    </article>
  </li>
  <li>
    <article class="post">
      <header class="post__title" />
      <div class="post__content" />
      <div class="post__footer" />
    </article>
  </li>
  ...
```

### Restructure individual shared images

Elected to BEM-ify post and comment components.

- Rename `<div class="image-title" ` to `<header class="post__title" `
- Move "remove from shake" button into header
- Rename `<div class="image-content" ` to `<div class="post__content" `
- Hoist `<div class="image-content-footer" ` to follow `<div class="post__content" ` as a sibling
- Move `<div class="alt-text" ` into `<div class="post__content" ` after `<div class="the-image" `, and rename to `<div class="post__alt-text" `
- Move `<div class="description" ` into `<div class="post__content" ` after `<div class="post__alt-text" `, rename to `<div class="post__description" `, and remove the `<div class="the-description" ` wrapper
- Move `<div class="originally-posted-by" ` into `<div class="post__content" ` after `<div class="post__description" `, and rename to `<div class="post__originally-by" `
- Rename `<div class="image-interactions" ` to `<div class="post__interactions" `
- Rename `<div class="inline-meta" ` to `<div class="post__meta" `
- Rename `<div class="stats" ` to `<div class="post__meta-stats" `
- Wrap `<div class="post__interactions" ` and `<div class="post__meta" ` in a new element `<div class="post__meta-interactions" `. This new element should be the first child of `<div class="post__footer" `
- Unwrap the like and save buttons in `<div class="post__interactions" ` from their containing divs and just put the `like-this` and `save-this` classes directly on the `<form>` element
- Rename `<div class="inline-details" ` to `<div class="post__comments" `, `<div class="post__likes" `, or `<div class="post__saves" `, depending on what you intend to display. Clicking the tabs above (in `<div class="post__meta-stats" ` dictates which one is displayed.
- Rename `<div class="avatar" ` to `<article class="comment__avatar" `, and wrap each comment inside a `<li>` within `<ul class="post__comments" `
- Rename `<div class="avatar" ` to `<div class="comment__avatar" `
- Rename `<div class="comment-body" ` to `<div class="comment__body" `
- Rename `<div class="meta" ` to `<div class="comment__meta" `
- Rename `<div class="comment-body-text" ` to `<div class="comment__text" `
- Remove `<div class="post-comment-inline">` from `<form class="post-comment-form">` and rename to `<form class="post__new-comment-form">` moving it to the `<li>` in the comment list
- Move `<form class="image-edit-title-form" ` to be a sibling following `<header class="post__title" ` and rename to `<form class="post__title-editor" `
- Move `<form class="alt-text-edit-form" ` to be a sibling following `<header class="post__alt-text" ` and rename to `<form class="post__alt-text-editor" `
- Move `<form class="description-edit-form" ` to be a sibling following `<header class="post__description" ` and rename to `<form class="post__description-editor" `
- Make use of `post__description--editable`, `post__description--editing` (and similar for title and alt-text) to control visibility of display and editor controls for each editable section
- Update javascript so all class based interactions work e.g. saving and cancelling alt text editing, displaying likes, saves, and comments, adding comments, showing additional comments

## [4.1.0] - 2025-08-22

- Added a tab order friendly hide and show mechanism for comment reply-to and
  delete controls (#1396)
- Removed scaling down of paragraph text blocks in several areas to make prose text more readable (#1406)

## [4.0.0] - 2025-06-21

- Removed Storybook, replaced with a simpler homebrew Eleventy site for
  documentation. (#1337)
  - Breaking change: Removed "components", "areas", and "layouts" from the
    "legacy" group. This was intended for a redesign that never came, and
    is no longer helpful. For users who directly consume `main.css`, there
    will be no impact, but if you were including the Sass partials directly,
    you may need to update your code.
- Bugfix: Callout text in Site Nav should wrap (#1333)

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
