---
layout: page
title: Promotions
tags: components
eleventyNavigation:
  key: Promotions
  parent: Components
---

## Mini Promos

Made for the Create Account Page.

{%
	include 'example',
	html: '/src/components/promotions/examples/promotions.html',
	fixedHeight: 175
%}

## Sidebar Promo

Appears in the sidebar, hidden on small screens.

{% include 'example', html: '/src/components/promotions/examples/promo.html' %}
