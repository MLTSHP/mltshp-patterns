---
layout: page
title: Site Header
tags: components
eleventyNavigation:
  key: Site Header
  parent: Components
---

Note that the Site Header contains the
[Site Navigation](/components/site-navigation),
[Choose a Shake](/components/choose-a-shake), and
[User Navigation](/components/user-navigation)
components. See those components for variations and states.

## Logged Out

{%
	include 'styleguide-example', html: '/src/components/site-header/examples/logged-out.html',
	iframe: true
%}

## Logged In

{%
	include 'styleguide-example', html: '/src/components/site-header/examples/logged-in.html',
	iframe: true
%}

## Logged In with Content

Note: This example has been updated to include the "peekaboo" header behavior using placeholder JavaScript. You'll need to provide your own JS to make this work.

{%
	include 'styleguide-example', html: '/src/components/site-header/examples/logged-in-with-content.html',
	iframe: true,
	fixedHeight: 768
%}
