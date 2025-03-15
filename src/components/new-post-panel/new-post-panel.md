---
layout: page
title: New Post Panel
tags: components
eleventyNavigation:
  key: New Post Panel
  parent: Components
---

Overlay that can appear on any page.

## Default

{%
	include 'styleguide-example', html: '/src/components/new-post-panel/examples/new-post-panel.html',
	iframe: true,
	fixedHeight: 320
%}

## With Shakes

{%
	include 'styleguide-example', html: '/src/components/new-post-panel/examples/with-shakes.html',
	iframe: true,
	fixedHeight: 320
%}

## With Shakes Open

{%
	include 'styleguide-example', html: '/src/components/new-post-panel/examples/with-shakes-open.html',
	iframe: true,
	fixedHeight: 420
%}

## Save Video

{%
	include 'styleguide-example', html: '/src/components/new-post-panel/examples/save-video.html',
	iframe: true,
	fixedHeight: 320
%}

## Confirm Video

{%
	include 'styleguide-example', html: '/src/components/new-post-panel/examples/save-video-confirmation.html',
	iframe: true,
	fixedHeight: 620
%}

## Email Unconfirmed

{%
	include 'styleguide-example', html: '/src/components/new-post-panel/examples/email-unconfirmed.html',
	iframe: true,
	fixedHeight: 320
%}

## Over Upload Limit

**Note:** There does not appear to be a way to reach this view,
since the "New Post" button is hidden if you're over the upload limit.

{%
	include 'styleguide-example', html: '/src/components/new-post-panel/examples/over-upload-limit.html',
	iframe: true,
		fixedHeight: 500
%}
