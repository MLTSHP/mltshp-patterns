---
layout: page
title: Bookmark
tags: components
eleventyNavigation:
  key: Bookmark
  parent: Components
---

Appears on shake pages, tracking the user's reading progress.

Note that the bookmark is intended to "pull" slightly outside the content well.
These samples have some padding adding to keep it visible.

## Default

{% include 'example', html: '/src/components/bookmark/examples/where-you-were.html' %}

The bookmark can include an optional jump link to let the user return
to the original position.

## Jump Link

{% include 'example', html: '/src/components/bookmark/examples/you-started-here.html' %}
