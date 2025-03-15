---
layout: page
title: Site Navigation
tags: components
eleventyNavigation:
  key: Site Navigation
  parent: Components
---

Appears in the [Site Header](/components/site-header).

Note that the Site Navigation contains the
[Choose a Shake](/components/choose-a-shake) component.

## Logged In

{%
	include 'styleguide-example', html: '/src/components/site-nav/examples/logged-in.html',
	iframe: true,
	fixedHeight: 125
%}

## Expanded

On small screens, the navigation is collapsed into a hamburger menu.
This is what it looks like expanded. (view on small screens)

{%
	include 'styleguide-example', html: '/src/components/site-nav/examples/expanded.html',
	iframe: true,
	fixedHeight: 300,
	fixedWidth: 320
%}

## Logged Out

{%
	include 'styleguide-example', html: '/src/components/site-nav/examples/logged-out.html',
	iframe: true,
	fixedHeight: 125
%}

## Logged Out with Callout

A "call out" is added when a logged-out user is on any page other than the
homepage or the sign up page.

{%
	include 'styleguide-example', html: '/src/components/site-nav/examples/call-out.html',
	iframe: true,
	fixedHeight: 125
%}
