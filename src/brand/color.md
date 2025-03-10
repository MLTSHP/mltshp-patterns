---
layout: page
title: Colors
tags: brand
eleventyNavigation:
  key: Colors
  parent: Brand
---

## Brand Colors

{% for token in tokens.color.brand %}

{% include 'color-swatch', color: token[1] %}

{% endfor %}

## Background Colors

{% for token in tokens.color.background %}

{% include 'color-swatch', color: token[1] %}

{% endfor %}

## Text Colors

{% for token in tokens.color.text %}

{% include 'color-swatch', color: token[1] %}

{% endfor %}

## Status Colors

{% for token in tokens.color.status %}

{% include 'color-swatch', color: token[1] %}

{% endfor %}

## Base Colors

{% for token in tokens.color.base %}

{% include 'color-swatch', color: token[1] %}

{% endfor %}
