---
layout: page
title: Themes
tags: brand
eleventyNavigation:
  key: Themes
  parent: Brand
---

Themes may be applied to a containing element to dramatically change that
content's appearance. Theme classes are always prefixed by `t-`.

While selector depth is best kept to a minimum, it's permissible to style
objects and components differently within a theme class. If you find you are
working _against_ a theme class a lot, it may be a sign that you really need
a whole new pattern and modifier (instead of just a themed variation).

## Light Mode

{% include 'example', html: '/src/themes/examples/light.html' %}

## Dark Mode

You can test dark mode by enabling dark mode on your computer, or with the theme switcher in the header.

{% include 'example', html: '/src/themes/examples/dark.html' %}
